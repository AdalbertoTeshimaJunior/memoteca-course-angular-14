export interface Thought {
  id?: number
  content: string
  authorship: string
  model: string
}

export type Thoughts = Array<Thought>;
