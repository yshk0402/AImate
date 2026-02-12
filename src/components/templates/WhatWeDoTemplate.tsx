import { WhatWeDoOrganism } from "@/components/organisms";
import type { SiteLocaleContent } from "@/components/site/content";
import type { Locale } from "@/types/content";

type WhatWeDoTemplateProps = {
  locale: Locale;
  content: SiteLocaleContent;
};

export function WhatWeDoTemplate({ locale, content }: WhatWeDoTemplateProps) {
  return (
    <WhatWeDoOrganism
      sectionId="what-we-do"
      heading={content.nav.whatWeDo}
      intro={content.whatWeDo.intro}
      services={content.whatWeDo.services}
      titleId="what-we-do-page-title"
      headingLevel="h1"
      kicker={null}
      accentBackground={false}
      showMedia
      locale={locale}
      linkBasePath="what-we-do"
    />
  );
}
