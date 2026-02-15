import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { OperatesXLanding } from "@/components/site/operatesX/OperatesXLanding";
import { getServiceDetail } from "@/components/site/serviceDetails";
import type { ServiceDetail } from "@/components/site/serviceDetails";

import "./styles.css";

type OperatesXLandingDetail = ServiceDetail & {
  hero: NonNullable<ServiceDetail["hero"]>;
  problemSection: NonNullable<ServiceDetail["problemSection"]>;
  ctaSection: NonNullable<ServiceDetail["ctaSection"]>;
  operatesXLanding: NonNullable<ServiceDetail["operatesXLanding"]>;
};

function isOperatesXLandingDetail(detail: ServiceDetail | null | undefined): detail is OperatesXLandingDetail {
  return Boolean(detail?.hero && detail.problemSection && detail.ctaSection && detail.operatesXLanding);
}

const detail = getServiceDetail("operates-x");

export const metadata: Metadata = {
  title: detail?.title ?? "Operates X",
  description: detail?.description ?? "月額でAI人材にタスクを依頼し放題。業務の再設計と実装まで。"
};

export default function OperatesXPage() {
  if (!isOperatesXLandingDetail(detail)) {
    notFound();
  }

  return (
    <main className="fx-operates-page">
      <div className="fx-operates-shell">
        <OperatesXLanding detail={detail} />
      </div>
    </main>
  );
}
