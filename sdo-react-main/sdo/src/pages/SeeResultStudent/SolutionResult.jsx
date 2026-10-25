import { useState } from "react"
import * as S from "./SeeResultStudentStyle"


const SolutionResult = ({index, code, testResult}) => {

    const [seeDetails, setSeeDetails] = useState(false)

    return (
        <>
        <S.SolutionBlock $color = {testResult.execution_status === "Success"  ? "#E6F4CF" : "#F9DFDF8C"}>
            <S.SolutionInfo>
                <S.SolutionBlockText>Решение {index+1}</S.SolutionBlockText>
                <S.DetailsBtn onClick = {() => setSeeDetails(!seeDetails)}>{seeDetails ? "Скрыть" : 'Подробнее'}</S.DetailsBtn>
            </S.SolutionInfo>
            {seeDetails && 
            (<S.SolutionDetails>
                <S.SolutionDetailsCode>{code}</S.SolutionDetailsCode>
                <S.SolutionDetailsResult>
                    <S.SolutionDetailsBlock>
                        <S.SolutionDetailsResultText>Тестирование</S.SolutionDetailsResultText>
                        <S.SolutionDetailsResultInfo>{testResult.execution_status}</S.SolutionDetailsResultInfo>
                    </S.SolutionDetailsBlock>
                    <S.SolutionDetailsBlock>
                        <S.SolutionDetailsResultText>Длина кода</S.SolutionDetailsResultText>
                        <S.SolutionDetailsResultInfo>{"Строки: " + testResult.code_length}</S.SolutionDetailsResultInfo>
                    </S.SolutionDetailsBlock>
                    <S.SolutionDetailsBlock>
                        <S.SolutionDetailsResultText>Время выполнения</S.SolutionDetailsResultText>
                        <S.SolutionDetailsResultInfo>{testResult.execution_time}</S.SolutionDetailsResultInfo>
                    </S.SolutionDetailsBlock>
                    <S.SolutionDetailsBlock>
                        <S.SolutionDetailsResultText>Используемая память</S.SolutionDetailsResultText>
                        <S.SolutionDetailsResultInfo>{testResult.memory_used_mb}</S.SolutionDetailsResultInfo>
                    </S.SolutionDetailsBlock>
                </S.SolutionDetailsResult>
            </S.SolutionDetails>)}
        </S.SolutionBlock>
        </>
    )
}

export default SolutionResult