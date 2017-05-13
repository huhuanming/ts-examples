interface IPerson {
  firstName: string
  lastName: string
  age: number
  isStudent: boolean
  home: {
    address: string
  }
  parentsNames?: string[]
  gender: 'male' | 'female'
  successCallBack?: (message: string) => void
}

type IStudent = IPerson

interface IPersonClass {
  className: string
}

type IStudentProfile = IPerson & IPersonClass

interface ITeacher extends IPerson {
  className: string
}
