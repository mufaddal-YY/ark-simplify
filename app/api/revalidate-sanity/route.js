import {revalidateTag} from "next/cache";
import {NextResponse} from "next/server";
import {parseBody} from "next-sanity/webhook";

const tagsByDocumentType = {
  blog: ["blogs"],
  seoSettings: ["seoSettings"],
  constructionLandingPage: ["constructionLandingPage"],
  financeLandingPage: ["financeLandingPage"],
  privacyPolicyPage: ["privacyPolicyPage"],
};

export async function POST(request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET?.trim();

  if (!secret) {
    return NextResponse.json(
      {error: "Sanity revalidation secret is not configured."},
      {status: 500},
    );
  }

  try {
    const {body, isValidSignature} = await parseBody(request, secret);

    if (!isValidSignature) {
      return NextResponse.json(
        {error: "Invalid Sanity webhook signature."},
        {status: 401},
      );
    }

    const tags = tagsByDocumentType[body?._type] ?? [];

    for (const tag of tags) {
      revalidateTag(tag, "max");
    }

    return NextResponse.json({
      ok: true,
      documentType: body?._type ?? null,
      revalidated: tags,
    });
  } catch (error) {
    console.error("Failed to process Sanity revalidation webhook", error);

    return NextResponse.json(
      {error: "Invalid Sanity webhook payload."},
      {status: 400},
    );
  }
}
