import { readFileSync } from 'fs'
const { users } = JSON.parse(readFileSync('../../mocks/User.json'))

const GetUserOneById = (userId) => {
	const findUser = users.filter((user) => user.userId === +userId)[0]
	return findUser
}

const GetUsersByIds = (userIds) => {
	const findUsers = users.filter((user) => userIds.includes(user.userId))
	return findUsers
}

const UserRepo = { GetUserOneById, GetUsersByIds }
export default UserRepo
