import React from 'react';

interface Button {
    value: string;
    className?: string;
    onClick: () => void;
}

const Calculator = () => {
    const [calculation, setCalculation] = React.useState<string>('');
    const [value, setValue] = React.useState<number>(0);

    const [previousNumber, setPreviousNumber] = React.useState<number>(0);
    const [isWaiting, setIsWaiting] = React.useState<boolean>(false);
    const [operatorType, setOperatorType] = React.useState<string>('');
    const [onResult, setOnResult] = React.useState<boolean>(false);
    const [firstNumber, setFirstNumber] = React.useState<boolean>(false);
    const [answerIsNotANumber, setAnswerIsNotANumber] = React.useState<boolean>(false);

    const clearAll = (): void => {
        setCalculation('');
        setValue(0);
        setPreviousNumber(0);
        setIsWaiting(false);
        setOperatorType('');
        setOnResult(false);
        setFirstNumber(false);
        setAnswerIsNotANumber(false);
    }

    const operationInstant = (operator: string): void => {
        if(answerIsNotANumber){
            clearAll();
            return;
        }

        switch (operator) {
            case '%':
                setValue(value / 100);
                break;
            case 'pi':
                setValue(Math.PI);
                break;
            case '1/x':
                setValue(1 / value);
                break;
            case 'x2':
                setValue(value**2);
                break;
            case 'sqrtX':
                setValue(Math.sqrt(value));
                break;
            default:
                alert('AN ERROR OCCUR!');
                break;
        }
    }

    const operation = (operator: string, symbol: string): void => {
        if(answerIsNotANumber){
            clearAll();
            return;
        }

        setOperatorType(operator);
        setPreviousNumber(value);
        setCalculation(value + symbol); // Since the symbol is a string, it will be concatenated
        setIsWaiting(true);
        setFirstNumber(true);
    }

    const addNumber = (number: number): void => {
        if(answerIsNotANumber){
            clearAll();
            return;
        }

        const val: string = value.toString();

        if((isWaiting && firstNumber) || onResult){
            setValue(number);
            setOnResult(false);
            setFirstNumber(false);
        }else setValue(parseInt(`${val}${number}`));
    }

    const opInverse = (): void => {
        setValue(value !== 0 ? -value : 0);
    }

    const deleteLastNumber = (): void => {
        const val: string = value.toString();
        setValue(val.length > 1 ? parseInt(val.substring(0, val.length - 1)) : 0);
    }

    const opEqual = (): void => {
        if(!isWaiting) return;

        setOnResult(true);

        let result: number = 0;

        setCalculation(calculation + value + '=');

        switch (operatorType) {
            case '%':
                break;
            case '/':
                result = previousNumber / value;
                break;
            case '*':
                result = previousNumber * value;
                break;
            case '-':
                result = previousNumber - value;
                break;
            case '+':
                result = previousNumber + value;
                break;
            default:
                alert('AN ERROR OCCUR!');
                break;
        }

        setIsWaiting(false);
        setAnswerIsNotANumber(isNaN(result));
        setValue(result);
    }

    const allButtons: Array<Button> = [
        {
            value: '%',
            onClick: () => operationInstant('%')
        },
        {
            value: 'π',
            onClick: () => operationInstant('pi')
        },
        {
            value: 'AC',
            onClick: () => clearAll()
        },
        {
            value: '←',
            onClick: () => deleteLastNumber()
        },

        {
            value: '1/x',
            onClick: () => operationInstant('1/x')
        },
        {
            value: 'x²',
            onClick: () => operationInstant('x2')
        },
        {
            value: '√x',
            onClick: () => operationInstant('sqrtX')
        },
        {
            value: '÷',
            onClick: () => operation('/', '÷')
        },

        {
            value: '7',
            className: 'calculator-number !bg-[#3c3c3c] hover:!bg-[#323232]',
            onClick: () => addNumber(7)
        },
        {
            value: '8',
            className: 'calculator-number !bg-[#3c3c3c] hover:!bg-[#323232]',
            onClick: () => addNumber(8)
        },
        {
            value: '9',
            className: 'calculator-number !bg-[#3c3c3c] hover:!bg-[#323232]',
            onClick: () => addNumber(9)
        },
        {
            value: '×',
            onClick: () => operation('*', '×')
        },

        {
            value: '4',
            className: 'calculator-number !bg-[#3c3c3c] hover:!bg-[#323232]',
            onClick: () => addNumber(4)
        },
        {
            value: '5',
            className: 'calculator-number !bg-[#3c3c3c] hover:!bg-[#323232]',
            onClick: () => addNumber(5)
        },
        {
            value: '6',
            className: 'calculator-number !bg-[#3c3c3c] hover:!bg-[#323232]',
            onClick: () => addNumber(6)
        },
        {
            value: '−',
            onClick: () => operation('-', '−')
        },

        {
            value: '1',
            className: 'calculator-number !bg-[#3c3c3c] hover:!bg-[#323232]',
            onClick: () => addNumber(1)
        },
        {
            value: '2',
            className: 'calculator-number !bg-[#3c3c3c] hover:!bg-[#323232]',
            onClick: () => addNumber(2)
        },
        {
            value: '3',
            className: 'calculator-number !bg-[#3c3c3c] hover:!bg-[#323232]',
            onClick: () => addNumber(3)
        },
        {
            value: '+',
            onClick: () => operation('+', '+')
        },

        {
            value: '±',
            className: 'calculator-number !bg-[#3c3c3c] hover:!bg-[#323232]',
            onClick: () => opInverse()
        },
        {
            value: '0',
            className: 'calculator-number !bg-[#3c3c3c] hover:!bg-[#323232]',
            onClick: () => addNumber(0)
        },
        {
            value: '=',
            className: 'calculator-equal !text-[#143141] !bg-[#4cc2ff] hover:!bg-[#47b1e8] col-span-2',
            onClick: () => opEqual()
        }
    ];

    return (
        <div id="calculator" className="w-[320px] bg-[#202020] p-1 pt-4">
            <p className="text-right text-sm text-[#a1a1a1] px-3 overflow-x-clip">
                {calculation}
            </p>

            <p className="w-[300px] transform translate-x-1 text-right text-5xl font-medium text-ellipsis overflow-x-clip">
                {value}
            </p>

            <div className="grid grid-cols-4 auto-rows-[50px] gap-0.5 mt-4">
                {allButtons.map((btn: Button, i: number) => (
                    <button
                        key={i}
                        onClick={() => btn.onClick()}
                        type="button"
                        className={`calculator-button rounded-md text-[#f7f7f7] bg-[#323232] text-xl hover:bg-[#3c3c3c] ${btn.className || ''}`}
                    >
                        {btn.value}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;