import {renderHook} from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils';
import { useLogin } from './useLogin';


describe('Use login', () => {


    test('initial state values', () => {

        //act
        const {result} = renderHook(() => useLogin());
        //assert
     expect(result.current.state).toEqual({
            status:'idle',
            user:null,
            error:null
        })

    })


    test('successful login flow', async () => {

    //arrage 
    //make a successful api response

    jest
    .spyOn(window,'fetch')
    .mockResolvedValue({json: () => data:'123'}) });

    const {result, waitForNextUpdate } = renderHook(() => useLogin())
 
    //act

    act(() => {
        result.current.onSubmit({
            email: 'test@email.com',
            password: 'password',
        })
    })

    //assert


        //it must be pending when the call is triggered
    expect(result.current.state).toEqual({
        status:'pending',
        user:null,
        error: null
    })

    await waitForNextUpdate();


        //when the call is success, the email id shud be updated

        expect(result.current.state).toEqual({
            status: 'resolved',
            user:{email:'test@email.com'},
            error: null
        })

        
    })


    //ERROR SCENARIO
     test('error in login flow', )




})