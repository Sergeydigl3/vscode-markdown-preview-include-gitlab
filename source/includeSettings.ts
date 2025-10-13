export default interface IncludeSettings {
    commonmarkRegex?: boolean
    markdownItRegex?: boolean
    gitlabRegex?: boolean
    customPattern?: RegExp
    notFoundMessage?: string
    circularMessage?: string
}
