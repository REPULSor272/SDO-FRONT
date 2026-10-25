import { useEffect, useState } from 'react'
import *  as S from './SeeResultStudentStyle.js'
import { useParams } from "react-router"
import { getTaskById, getResultLabStudent } from '../../api/file-api';
import SolutionResult from './SolutionResult.jsx';
import {resetAttempts} from '../../api/tasks-api.jsx'
import { use } from 'react';


const SeeResultStudent = () => {

    const {task_id, student_id} = useParams()

    const [task, setTask] = useState()
    const [solutions, setSolutions] = useState([])

    useEffect(() => {
        getTaskById(task_id).then((res) => {
                setTask(res.data)
            }).catch(err => console.log(err))
    }, [task_id])

    useEffect(() => {
        getResultLabStudent(task_id, student_id)
        .then(res => setSolutions(res.data))
        .catch(res => console.log(res))
    }, [student_id])

    const task_descript = task?.description?.split(/\\n|\n/)
    const description = task_descript?.[0] || 'Нет данных'
    const description_test_vovd = task_descript?.[1]?.match(/\d+/g)?.join(' ') || 'Нет данных'
    const description_test_vovod = task_descript?.[2]?.match(/\d+/g)?.join(' ') || 'Нет данных'


    return(
        <S.Container>
            <S.Description>
                <S.DescriptionText>
                    {description}
                </S.DescriptionText>
                <S.DescriptionTest>
                    <S.DescriptionTextBold>Формат вводных данных</S.DescriptionTextBold>
                    <S.DescriptionText>{description_test_vovd}</S.DescriptionText>
                    <S.DescriptionTextBold>Формат выводных данных</S.DescriptionTextBold>
                    <S.DescriptionText>{description_test_vovod}</S.DescriptionText>
                    <S.DescriptionTextBold>Пример ввода</S.DescriptionTextBold>
                    <S.DescriptionText>{description_test_vovd}</S.DescriptionText>
                    <S.DescriptionTextBold>Пример вывода</S.DescriptionTextBold>
                    <S.DescriptionText>{description_test_vovod}</S.DescriptionText>
                </S.DescriptionTest>
            </S.Description>
            {solutions.map((solution, index) => <SolutionResult index = {index} code={solution.code} testResult={solution.test_result}/>)}
            <S.ThrowAttemps onClick={() => {resetAttempts(task_id, student_id).then(res => alert(res.data.message))}}>Сбросить попытки</S.ThrowAttemps>
        </S.Container>
    )
}

export default SeeResultStudent