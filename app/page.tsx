"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [lang, setLang] = useState<'en' | 'zh'>('en');

  const t = {
    en: {
      title: "Su & Partners International Legal Group",
      subtitle: "Your Cross-Border Legal Architect",
      about: "About Miller Jill",
      services: "Practice Areas",
      contact: "Contact",
      footer: "Corporate law is a language of civilization. I translate it."
    },
    zh: {
      title: "苏氏国际律师事务所",
      subtitle: "跨境法律架构师",
      about: "创始人简介",
      services: "专业服务领域",
      contact: "联系方式",
      footer: "公司法是一种文明的语言，而我，负责翻译它。"
    }
  };

  const tr = t[lang];

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-12">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">SU & PARTNERS</h1>
        <Button variant="ghost" onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}>
          {lang === 'en' ? '中文' : 'EN'}
        </Button>
      </div>

      <section className="text-center space-y-3">
        <h2 className="text-4xl font-extrabold tracking-tight">{tr.title}</h2>
        <p className="text-lg text-muted-foreground">{tr.subtitle}</p>
      </section>

      <section>
        <Card>
          <CardContent className="space-y-2 py-4">
            <h3 className="text-2xl font-semibold">Miller Jill （苏晓燕）</h3>
            <p>Founder & Principal Attorney</p>
            <p>216 W 112th St, New York, NY 10026</p>
            <p>Born Jan 10, 1984 · Chongqing, China</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-bold">{tr.services}</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Cross-border company formation & governance</li>
          <li>Foreign direct investment structure (including CFIUS)</li>
          <li>Shareholder agreement & rights alignment</li>
          <li>IP registration & global protection</li>
          <li>Family business succession & tax planning</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-bold">{tr.contact}</h3>
        <p>Email: contact@suandpartners.com</p>
        <p>Office: 216 W 112th St, New York, NY</p>
      </section>

      <footer className="text-center pt-8 text-muted-foreground text-sm border-t">
        <p>“{tr.footer}” – Miller Jill</p>
      </footer>
    </main>
  );
}
