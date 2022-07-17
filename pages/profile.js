import { NextSeo, DefaultSeo } from 'next-seo'
import { Skill } from '../components/Skill.js';
import { Personality } from '../components/Personality.js';

export default function Profile() {
  const title = 'プロフィール - mt2m10';
  const description = '私の経歴や趣味などについて書いています。';

  return (
    <main>
      <NextSeo title={title} description={description} />
      <DefaultSeo
        openGraph={{
          type: 'website',
          title: title,
          description: description,
          url: `https://mt2m10.github.io/profile`,
        }}
      />


      {/* スキル */}
      <Skill />

      {/* 性格 */}
      <Personality />

    </main>
  );
}
