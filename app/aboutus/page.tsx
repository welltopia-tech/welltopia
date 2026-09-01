import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/Header";
import SiteFooter from "@/components/site/Footer";
import CycleDiagram from "@/components/aboutus/CycleDiagram";

const title = "私たちについて｜WELLTOPIA";
const description =
  "心地よさを、社会の新しい価値基準にする。WELLTOPIAが目指す「可能性の循環」と、代表からのメッセージ。";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, siteName: "WELLTOPIA", locale: "ja_JP", type: "website" },
};

export default function AboutUsPage() {
  return (
    <>
      <SiteHeader solid />
      <main className="bg-white pt-[72px]">
        {/* intro */}
        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/"
              className="mb-10 inline-flex items-center gap-2 text-[13px] text-[#6b7280] transition-colors hover:text-[#1a4f8a] md:mb-14"
            >
              ← WELLTOPIA トップへ戻る
            </Link>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#1a4f8a]" />
              <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">ABOUT US ｜ 存在意義</span>
            </div>
            <h1 className="max-w-[20ch] text-[clamp(26px,3.6vw,42px)] font-medium leading-tight text-[#0d2d52]">
              <span
                className="mb-3 block text-lg font-normal italic text-[#1a4f8a]"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Make Well-being a New Measure of Value
              </span>
              心地よさを、社会の新しい価値基準にする
            </h1>
            <p className="mt-8 max-w-2xl font-light leading-[1.9] text-[#6b7280]">
              これまで企業の成長は、売上や利益、生産性といった指標を中心に語られてきました。しかし私たちは、顧客がどう感じるか、働く人がどう感じるかという「体験の質」も、これからの企業価値を左右する重要な基準になると考えています。人にとっての心地よさと、企業にとっての成長を対立させるのではなく、共創によってその両方が高まる状態をつくる。心地よい体験が選ばれる理由となり、新しい価値や成長へつながっていく社会を、私たちは目指します。
            </p>
          </div>
        </section>

        {/* cycle of possibility */}
        <section className="bg-[#0d2d52] px-5 py-20 text-white md:px-10 md:py-28">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-[minmax(280px,440px)_1fr] md:gap-20">
            <CycleDiagram />
            <div>
              <div className="mb-4 inline-flex items-center gap-2.5">
                <span className="h-px w-6 bg-[#8fbbe0]" />
                <span
                  className="text-xs italic tracking-[0.15em] text-[#8fbbe0]"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  A Cycle of Possibility
                </span>
              </div>
              <h2 className="mb-6 text-[clamp(20px,2.4vw,28px)] font-medium">可能性の循環</h2>
              <p className="mb-4 max-w-md font-light leading-[1.9] text-white/70">
                私たちが目指すのは、人にとってのより良さと、企業の成長が両立し、その価値が社会へと還元され続ける未来です。
              </p>
              <p className="max-w-md font-light leading-[1.9] text-white/70">
                WELLTOPIAという共創の場を通じて、人・企業・地域が持つ知識や技術、想いをつなぎ、新しい事業や体験、働き方へと変えていきます。その一つひとつの共創が、持続的な成長とより良い社会を同時に育てていく。
              </p>
            </div>
          </div>
        </section>

        {/* representative message */}
        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mb-14 md:mb-20">
              <div className="mb-4 inline-flex items-center gap-2.5">
                <span className="h-px w-6 bg-[#1a4f8a]" />
                <span className="text-xs tracking-[0.25em] text-[#1a4f8a]">MESSAGE</span>
              </div>
              <h2 className="text-[clamp(24px,3vw,34px)] font-medium text-[#0d2d52]">代表メッセージ</h2>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] md:gap-16">
              <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl bg-[#f8f9fa] md:mx-0">
                <img
                  src="/images/company/representative.png"
                  alt="代表取締役 加藤有希"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p
                  className="mb-6 text-[clamp(17px,1.9vw,21px)] leading-[2] text-[#0d2d52]"
                  style={{ fontFamily: "var(--font-noto-serif-jp), serif" }}
                >
                  私たちは、日々さまざまな<span className="italic text-[#1a4f8a]">「体験」</span>
                  の中で生きています。商品を選ぶこと、働くこと、誰かと関わること。その一つひとつが、気持ちや行動、そして人生の豊かさを形づくっています。
                </p>
                <p className="mb-8 font-light leading-[1.9] text-[#6b7280]">
                  一方で、企業活動では、売上や効率だけでは測れない「体験の質」が、まだ十分に価値として扱われているとは言えません。だから私たちは、心地よさを、社会の新しい価値基準にすることを決めました。WELLTOPIAは、顧客や従業員の声と、企業の技術や知識、異なる専門性を共創によってつなぎ、新しい体験価値へと編集する会社です。
                </p>
                <div className="flex items-center gap-4 border-t border-[#e5e7eb] pt-6">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-[#1a4f8a]/30 text-[#1a4f8a]">
                    加
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0d2d52]">加藤 有希</p>
                    <p className="text-xs text-[#6b7280]">株式会社WELLTOPIA　代表取締役</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
