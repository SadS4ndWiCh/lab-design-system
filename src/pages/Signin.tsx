import { Envelope, Lock } from "phosphor-react"

import { Button } from "../components/Button"
import { Checkbox } from "../components/Checkbox"
import { Heading } from "../components/Heading"
import { Text } from "../components/Text"
import { TextInput } from "../components/TextInput"

export const SignIn = () => {
	return (
		<div className='flex flex-col items-center justify-center w-screen h-screen p-12 bg-gray-900'>
      <Heading size='lg'>
        <h1>Login</h1>
      </Heading>

      <form className='flex flex-col gap-3 w-full max-w-sm'>
        <div className='flex flex-col gap-1'>
          <Text asChild size='sm'>
            <label htmlFor="mail">Email</label>
          </Text>
          <TextInput.Root className='w-full'>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id='mail' type='email' placeholder='Digite seu e-mail' />
          </TextInput.Root>
        </div>

				<div className='flex flex-col gap-1'>
          <Text asChild size='sm'>
            <label htmlFor="pass">Senha</label>
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id='pass' type='password' placeholder='*********' />
          </TextInput.Root>
        </div>

        <Text asChild>
          <label htmlFor='confirm' className='flex items-center gap-2 my-3'>
            <Checkbox id='confirm' />

            Confirmo com os termos de uso
          </label>
        </Text>

        <Button>
          Criar minha conta
        </Button>
      </form>
    </div>
	)
}