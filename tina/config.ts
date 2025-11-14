import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "blog_zh",
        label: "博客文章 (中文)",
        path: "src/content/blog/zh",
        format: "md",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return `${values?.title
                ?.toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '')}`;
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "标题",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "描述",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "发布日期",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "作者",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "封面图片",
            description: "博客文章的特色图片",
          },
          {
            type: "string",
            name: "tags",
            label: "标签",
            required: true,
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "boolean",
            name: "featured",
            label: "精选文章",
            description: "将此文章显示为精选文章",
          },
          {
            type: "string",
            name: "lang",
            label: "语言",
            required: true,
            options: ["zh", "en"],
            ui: {
              component: "select",
            },
          },
          {
            type: "string",
            name: "translationKey",
            label: "翻译键",
            description: "用于关联不同语言版本的文章",
          },
          {
            type: "rich-text",
            name: "body",
            label: "内容",
            isBody: true,
          },
        ],
      },
      {
        name: "blog_en",
        label: "Blog Posts (English)",
        path: "src/content/blog/en",
        format: "md",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return `${values?.title
                ?.toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '')}`;
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Publish Date",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Cover Image",
            description: "Featured image for the blog post",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            required: true,
            list: true,
            ui: {
              component: "tags",
            },
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Post",
            description: "Display this post as a featured article",
          },
          {
            type: "string",
            name: "lang",
            label: "Language",
            required: true,
            options: ["zh", "en"],
            ui: {
              component: "select",
            },
          },
          {
            type: "string",
            name: "translationKey",
            label: "Translation Key",
            description: "Used to link different language versions of the same post",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
          },
        ],
      },
    ],
  },
});
