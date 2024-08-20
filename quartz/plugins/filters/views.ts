import { QuartzFilterPlugin } from "../types"

export const RemoveViews: QuartzFilterPlugin<{}> = () => ({
  name: "RemoveViews",
  shouldPublish(_ctx, [_tree, vfile]) {
    const viewFlag: boolean = vfile.data?.frontmatter?.tags?.includes("view/note") || false
    return !viewFlag
  },
})
