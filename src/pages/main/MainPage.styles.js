import styled from 'styled-components'
import { AlignCenter, JustifyBetween } from '@/styles/Common'

const MainTop = styled.section`
	width: 100vw;
	padding-top: 24px;
	background-color: ${({ theme }) => theme.Color.orange[0]};
`

const MainTopWrapper = styled.div`
	width: 1024px;
	height: 760px;
	position: relative;
	background-color: ${({ theme }) => theme.Color.orange[0]};
	margin: 0px auto;
`

const MainTitle = styled.h1`
	padding-top: 200px;
	line-height: 73px;
	margin-bottom: 40px;
`
const MainTopImg = styled.img`
	position: absolute;
	right: -84px;
	bottom: 0;
	width: 655px;
	height: 800px;
	background-color: ${({ theme }) => theme.Color.orange[0]};
	background-repeat: no-repeat;
	background-size: 804px 685px;
`
const MainEven = styled.section`
	width: 100vw;
	background-color: ${({ theme }) => theme.Color.grayScale[100]};
`
const Wrapper = styled.div`
	width: 1024px;
	margin: 0px auto;
	${AlignCenter}
	justify-content: space-between;
`
const Img = styled.img`
	background-size: 655px 750px;
	width: 655px;
	height: 750px;
`
const ContentTitle = styled.p`
	font-weight: ${({ theme }) => theme.FontWeight.bold};
	font-size: ${({ theme }) => theme.FontSize.tiny};
	color: ${({ theme }) => theme.Color.orange[100]};
`
const Content = styled.p`
	font-size: ${({ theme }) => theme.FontSize.tiny};
	color: ${({ theme }) => theme.Color.grayScale[40]};
	line-height: 30px;
`

const MainThird = styled.section`
	width: 100vw;
	background-color: #fff6ee;
`
const Title = styled.h1`
	font-size: 42px;
	line-height: 57px;
	margin-bottom: 10px;
`
const StoryList = styled.ul`
	margin-top: 40px;
	padding-left: 0;
	${JustifyBetween}
`
const ListItem = styled.li`
	margin-right: 8px;
	width: 124px;
`
const StoryTitle = styled.p`
	font-weight: ${({ theme }) => theme.FontWeight.bold};
`
const StoryContent = styled.p`
	font-size: 13px;
	color: ${({ theme }) => theme.Color.grayScale[40]};
	line-height: 17px;
`
const MainLast = styled.section`
	width: 100vw;
	background-color: ${({ theme }) => theme.Color.green[0]};
`

const S = {
	Content,
	MainTop,
	MainTopWrapper,
	MainTitle,
	MainTopImg,
	MainEven,
	ContentTitle,
	MainThird,
	Wrapper,
	Img,
	Title,
	StoryList,
	ListItem,
	StoryTitle,
	StoryContent,
	MainLast,
}

export default S
