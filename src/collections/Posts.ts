import { BlocksFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload/types";

const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        // userConfig: (config) => ({
        //     ...config,
        //     features: [
        //         ...config.features,
        //         BlocksFeature({
        //             blocks: [CallTo]
        //         })
        //     ]
        // })
      }),
    },
  ],
};

export default Posts;
