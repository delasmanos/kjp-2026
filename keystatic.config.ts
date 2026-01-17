import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  ui: {
    brand: { name: "KJP Struth" },
  },
  storage: import.meta.env.PROD
    ? {
        kind: "github",
        repo: {
          owner: "YOUR_GITHUB_USERNAME", // TODO: user needs to update this
          name: "portfolio-astro",
        },
      }
    : {
        kind: "local",
      },
  singletons: {
    homepage: singleton({
      label: "Home Page",
      path: "src/data/homepage/index",
      format: { contentField: "content" },
      schema: {
        headline: fields.text({ label: "Headline" }),
        subheadline: fields.text({ label: "Subheadline" }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
    about: singleton({
      label: "About Page",
      path: "src/data/about/index",
      format: { contentField: "bio" },
      schema: {
        headline: fields.text({ label: "Headline" }),
        bio: fields.markdoc({ label: "Bio" }),
        skills: fields.array(fields.text({ label: "Skill" }), {
          label: "Skills",
        }),
        experience: fields.array(
          fields.object({
            role: fields.text({ label: "Role" }),
            company: fields.text({ label: "Company" }),
            duration: fields.text({ label: "Duration" }),
            description: fields.text({ label: "Description" }),
          }),
          { label: "Experience" },
        ),
      },
    }),
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/blog/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        subTitle: fields.text({ label: "Untertitel", multiline: false }),
        description: fields.text({
          label: "Kurzbeschreibung (WICHTIG für google)",
          multiline: true,
        }),
        published: fields.checkbox({
          label: "Publisehd",
          description: "Soll der Einrag sichtbar sein",
        }),
        pubDate: fields.date({ label: "Published Date" }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "src/assets/images/pages",
              publicPath: "@assets/images/pages/",
            },
          },
        }),
        // Define a tags field
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value || "Add a tag",
        }),
      },
    }),
    // projects: collection({
    //   label: "Projects",
    //   slugField: "title",
    //   path: "src/data/projects/*",
    //   format: { contentField: "content" },
    //   schema: {
    //     title: fields.slug({ name: { label: "Title" } }),
    //     description: fields.text({ label: "Description" }),
    //     link: fields.url({ label: "Project URL" }),
    //     image: fields.image({
    //       label: "Cover Image",
    //       directory: "public/images/projects",
    //       publicPath: "/images/projects",
    //     }),
    //     content: fields.markdoc({ label: "Content" }),
    //   },
    // }),
  },
});
