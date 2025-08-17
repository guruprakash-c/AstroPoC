import rssSchema, { pageGlobToRssItems } from '@astrojs/rss'; 

export async function GET(context){
    return rss({
        title: 'Astro PoC Blog',
        description: 'Astro PoC Blog posts',
        site: context.site,
        items: await pageGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-US<language>`
    });
}
