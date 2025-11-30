import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import * as cheerio from 'cheerio';

export async function POST(req: NextRequest) {
  const { url } = await req.json();
  let exists = false;
  try {
    await axios.head(url, {
      timeout: 5000,
      maxRedirects: 5,
      validateStatus: (s) => s < 400,
    });
    exists = true;
  } catch (headErr) {
    // HEAD may be disallowed or blocked by CORS; try GET
    try {
      await axios.get(url, {
        timeout: 5000,
        maxRedirects: 5,
        validateStatus: (s) => s < 400,
      });
      exists = true;
    } catch {
      exists = false;
    }
  }

  if (exists) {

     // Fetch the HTML content
    const htmlRes = await fetch(url);
    const html = await htmlRes.text();

    const $ = cheerio.load(html);

    const title = $("title").text()?.trim();
    const metaDesc = $('meta[name="description"]').attr("content");

    const description =
      metaDesc ||
      title ||
      "No description available for this website.";


    return NextResponse.json({exists,description})
  }
}
