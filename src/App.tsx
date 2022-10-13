import { Heading } from './components/Heading';
import { Text } from './components/Text';
import './styles/global.css';

export function App() {
  return (
    <div className='w-screen h-screen p-12 bg-gray-900'>
      <section>
        <Heading size='lg'>
          <h1>Lab Design System</h1>
        </Heading>

        <Text>
          <p>Criando um Design System a partir do Figma utilizando o Storybook.</p>
        </Text>
      </section>

      <section className='mt-6'>
        <Heading>Acessando o Storybook</Heading>
        <Text>
          <p>
            Para acessar o Storybook, execute 
            <code className='ml-1 px-[6px] py-[1px] rounded italic bg-gray-800'>
              yarn storybook
            </code>.
          </p>
        </Text>
      </section>
    </div>
  )
}