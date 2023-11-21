import { readFileSync } from 'fs'
const { users } = JSON.parse(readFileSync('../../mocks/User.json'))

/** 사용자 아이디를 입력받아, 해당 아이디 값은 가지는 사용자 한명의 정보를 반환합니다. */
const GetUserOneById = (userId) => {
	const findUser = users.filter((user) => user.userId === +userId)[0]
	return findUser
}
/** 사용자 아이디 리스트를 입력받아, 해당 아이디를 가지는 사용자 리스트를 반환합니다. */
const GetUsersByIds = (userIds) => {
	const findUsers = users.filter((user) => userIds.includes(user.userId))
	return findUsers
}

const UserRepo = { GetUserOneById, GetUsersByIds }
export default UserRepo
