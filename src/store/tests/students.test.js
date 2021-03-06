import students from '../models/students'
import data from '../sample_data/students.json'

it('can add student', () => {
    students.add(data[0])
    students.add(data[1])
    students.add(data[2])
    students.add(data[3])
    students.add(data[4])

    expect(students.get(data[0].id).first).toEqual(data[0].first)

    expect(() => {students.add(data[4])}).toThrow('student already exists')
})

it('can compute name', () => {
    expect(students.get(data[0].id).name).toEqual(data[0].first + ' ' + data[0].last)
})

it('can update student', () => {
    data[1].first = 'sample'

    students.update(data[1])

    expect(students.get(data[1].id).first).toEqual('sample')
})

it('can delete student', () => {
    students.delete(data[0].id)

    expect(students.get(data[0].id)).toBeUndefined()
})