import S from './ImageBox.styles'

const ImageBox = ({ boxshape, size, src, ...rest }) => {
	return <S.ImgBox $boxshape={boxshape} $size={size} {...rest} />
}

export default ImageBox
