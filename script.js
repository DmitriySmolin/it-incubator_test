document.addEventListener('DOMContentLoaded', () => {

    const inputSearch = document.querySelector('.input-search');

    //№5
    const users = [

        {
            name: 'Dmitry',
            age: 24
        }, {
            name: 'Ekaterina',
            age: 22
        }, {
            name: 'Ivan',
            age: 24
        }, {
            name: 'Svetlana',
            age: 21
        }

    ]

    const showInputValue = ({
        target
    } = event) => {
        console.log()
        if (target.classList.contains('btn-search')) {
            const value = inputSearch.value.trim();

            //№4
            // if (value.toLowerCase() === 'google') {
            //     alert('Yandex круче. Но это не точно')
            //     return false;
            // };

            //№10
            if (value.toLowerCase() === 'google') {
                setTimeout(() => {
                    alert('Yandex круче. Но это не точно')
                }, 3000);
                return false;
            };

            //№3
            // value !== '' ? alert(`${value}, ${users[0].name}`) : null;


            //№10
            value !== '' ?
                setTimeout(() => {
                    alert(`${value}, ${users[0].name}`)
                }, 3000) :
                null;

        }
    }
    document.body.addEventListener("click", showInputValue);

    //№6
    const superSum = (a, b) => {
        (!isNaN(a) && !isNaN(b)) ?
        alert(Number(a) + Number(b)): alert("Ошибка! Входные данные должны иметь числовой тип данных");
    }
    //superSum(2014, 6);

    //№7
    const arrNumbers = [1, 3, 6, 0, 14, 5, 6, 8, 25, 360, 66, 999, 54, 1000, 678, 7, 12, -5, 1001];
    let max;
    let min;
    for (let i = 0; i < arrNumbers.length; i++) {
        if (arrNumbers[i] > max || !max) {
            max = arrNumbers[i];
        }

        min < arrNumbers[i] ? min = min : min = arrNumbers[i];


    }
    console.log(`max:${max}`);
    console.log(`min:${min}`);


    //№8
    let a = "XXX";
    let b = "YYY";

    let a1 = a;
    let b1 = b;
    b = a1;
    a = b1;
    console.log(a);
    console.log(b);

    //№9
    const findMax = (array = []) => {

        if (!Array.isArray(array)) {
            console.error('Ошибка!, передаваемый тип данных должен быть массивом');
            return false;
        }

        let max;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max || !max) {
                max = array[i];
            }
        }
        return max;
    }
    console.log(findMax([1996, 1, 3, 6, 0, 14, 5, 6, 8, 25, 360, 66, 999, 54, 1000, 678, 7, 12, -5, 1001]));
});