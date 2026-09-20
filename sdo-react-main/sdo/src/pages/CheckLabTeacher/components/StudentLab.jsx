import * as S from '../CheckLabTeacher.styles'
import { ReactComponent as VectorIcon} from '../../../img/Vector.svg'
import { useState } from 'react';

const StudentLab = ({name, isSubmitted, score}) => {

    const [checked, setChecked] = useState(false);
    const [isEditingScore, setIsEditingScore] = useState(false)
    const [scoreInput, setScoreInput] = useState('')

    const DowlandFile = () => {
        console.log('Как будет ручка, сделать запрос')
    }

    const changeEsp = () => {
        setIsEditingScore((prev) => !prev)
    }

    const handleSaveScore = () => {
        if (!isNaN(Number(scoreInput)) && Number(scoreInput) >= 0 && Number(scoreInput) <= 100) {
            setScoreInput(scoreInput)
        }
    }

    const scoreChange = () => {
        if (scoreInput === ''){
            return <>Изменить оценку</>
        }
        return <S.StudentLabChange>Оценка изменена <span style={{fontWeight: '600', marginLeft: '10px', color: scoreInput > 75 ? '#21B200' : '#FF7070' }}>{scoreInput}/100</span></S.StudentLabChange>
    }

    return (
        <S.StudentsLab $color={isSubmitted ? (score > 75 ? "#E6F4CF" : "#F9DFDF8C") : "#F0F0F0"}>
            <S.StudentsLabText>
                {name}
            </S.StudentsLabText>
            {isSubmitted ? (
            <S.StudentLabAction>
                <S.StudentsLabtn>Просмотр результатов</S.StudentsLabtn>
                <S.StudentLabResult $color={score > 75 ? "#21B200" : "#FF7070"}>{score}/100</S.StudentLabResult>
                <S.StudentLabDowland onClick = {DowlandFile}><VectorIcon/></S.StudentLabDowland>
                <S.StudentLabChange>
                    {isEditingScore ? (
                        <S.ScoreEditBox>
                            Введите оценку
                        <input
                            type="text"
                            value={scoreInput}
                            onClick={(e) => e.stopPropagation()}
                            onChange={(e) => {if ( 0 <= Number(e.target.value) && Number(e.target.value) <= 100) setScoreInput(e.target.value)}}
                            onBlur={() => {
                                handleSaveScore(); 
                                setIsEditingScore(false);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                handleSaveScore();
                                setIsEditingScore(false);
                                }
                            }}
                            placeholder="0-100"
                            autoFocus
                        />
                        </S.ScoreEditBox>
                    ) : <span onClick={() => changeEsp()} style={{ cursor: 'pointer' }}>
                            {scoreChange()}
                        </span>}
                </S.StudentLabChange>
                <S.CheckboxContainer>
                    <span>{!checked ? 'Сохранить:' : 'Сохранено'}</span>
                    <S.StyledCheckbox $checked={checked} onClick={() => setChecked((prev) => !prev)}>
                        <svg viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </S.StyledCheckbox>
                    </S.CheckboxContainer>
            </S.StudentLabAction>) : (<S.StudentLabNo><S.StudentLabChange>Не оценено</S.StudentLabChange></S.StudentLabNo>)
            }
        </S.StudentsLab>
    )
}

export default StudentLab