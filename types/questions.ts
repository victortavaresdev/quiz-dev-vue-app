interface QuestionProps {
  id: string
  question: string
  correctAnswer: string
  options: OptionProps[]
}

interface OptionProps {
  id: string
  optionText: string
}
