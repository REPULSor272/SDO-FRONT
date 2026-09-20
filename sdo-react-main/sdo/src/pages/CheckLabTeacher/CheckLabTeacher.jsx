import * as S from './CheckLabTeacher.styles'
import { useParams } from 'react-router-dom';
import { getTaskById } from '../../api/file-api';
import React, { useState, useEffect } from 'react';
import { getGroups } from '../../api/teacher-api';
import StudentLab from './components/StudentLab';


const CheckLabTeacher = () => {
    const { task_id } = useParams();
    useEffect(() => {
        console.log('Загрузка задачи с ID:', task_id);
        getTaskById(task_id)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.error('Ошибка загрузки задачи:', error.message);
          });
      }, [task_id]);

    const [searchValue, setSearchValue] = useState("");
    const [groups, setGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('')
    const [selectedSort, setSelectedSort] = useState('')

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

  const handleSelectGroup = (e) => {
    setSelectedGroup(e.target.value); 
  };
  const handleSelectSort = (e) => {
    setSelectedSort(e.target.value); 
  };

  const handleSearch = () => {
    console.log("Поиск запущен!");
  };

    const fetchGroups = async () => {
        try{
            const response = await getGroups()
            setGroups(response.data)
        }catch(error){
            console.error("Ошибка при загрузке групп:", error.message);
            setGroups([]);
        }}
        
    useEffect(()=>{
        fetchGroups()
    }, [])

    ///Люди добрые, когда узнаете ручки для этого добра, сделайте их пожалуйста, уберите этот срам.
    const description = 'Даны три целых числа. Найдите наибольшее из них (программа должна вывести ровно одно целое число). Под наибольшим в этой задаче понимается число, которое не меньше, чем любое другое.'
    const description_test_vovd = 'Вводится 3 числа'
    const description_test_vovod = 'Выведете ответ на задачу'

    const sorts = [
            { id: '1', name: 'По фамилии (А-Я)' },
            { id: '2', name: 'По убыванию оценки' },
            { id: '3', name: 'По возрастанию оценки' },
        ]

    const studentsData = [
  {
    id: 1,
    fullName: 'Иванов Иван Сергеевич',
    group: '211-365',
    score: 85,
    isSubmitted: true,
  },
  {
    id: 2,
    fullName: 'Петров Алексей Владимирович',
    group: '211-366',
    score: 45,
    isSubmitted: true,
  },
  {
    id: 3,
    fullName: 'Сидорова Анна Дмитриевна',
    group: '211-365',
    score: null,
    isSubmitted: false,
  },
  {
    id: 4,
    fullName: 'Кузнецов Михаил Андреевич',
    group: '211-366',
    score: 100,
    isSubmitted: true,
  },
  {
    id: 5,
    fullName: 'Смирнова Елена Игоревна',
    group: '211-365',
    score: null,
    isSubmitted: false,
  },
];
    return (
        <S.container>
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
            <S.StudentList>
                <S.StudentListH1>Список студентов:</S.StudentListH1>
                <S.StudentListUp>
                <S.SearchInputContainer>
                    <S.SearchInput
                    type="text"
                    placeholder="Поиск студента"
                    value={searchValue}
                    onChange={handleSearchChange}
                    />
                    <S.SearchIcon onClick={() => handleSearch()} />
                </S.SearchInputContainer>
                <S.Sort>
                <S.Select value={selectedSort} onChange={handleSelectSort}>
                    <option value="">Сортировать по...</option>
                    {(
                    sorts.map((sort) => (
                        <option key={sort.id} value={sort.name}>
                        {sort.name}
                        </option>
                    ))
                    )}
                </S.Select>

                <S.Select value={selectedGroup} onChange={handleSelectGroup}>
                    <option value="">Группа</option>
                    {groups.map((group) => (
                    <option key={group.id} value={group.name}>
                        {group.name}
                    </option>
                    ))}
                </S.Select>
                </S.Sort>
                </S.StudentListUp>
                {studentsData
                .filter((student) => {if (searchValue === '') {return true} return student.fullName.toLowerCase().includes(searchValue.toLowerCase())})
                .filter((student) => {if (selectedGroup === '') {return true} return student.group === selectedGroup})
                .slice()
                .sort((a,b) => {
                    if (selectedSort === "По фамилии (А-Я)"){
                        return a.fullName.localeCompare(b.fullName, 'ru');
                    }
                    if (selectedSort === "По убыванию оценки"){
                        return b.score - a.score;
                    }
                    if (selectedSort === "По возрастанию оценки"){
                        return a.score - b.score;
                    }
                })
                .map((student) => {
                    return <StudentLab key = {student.id} name = {student.fullName} isSubmitted = {student.isSubmitted} score = {student.score} ></StudentLab>
                })}
            </S.StudentList>
        </S.container>
    )
}

export default CheckLabTeacher