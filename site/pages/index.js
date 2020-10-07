import React from 'react';
import Head from 'next/head';
import tw from 'twin.macro';
import styled from '@emotion/styled';

// Styled Components
const StyledIndex = styled.section`
  div {
    ${tw`w-full h-auto min-h-screen max-h-screen`}
    main {
      ${tw`bg-blue-800`};
      div {
        ${tw`flex flex-col items-center justify-center m-auto w-3/4`};
        h1 {
          ${tw`text-blue-300 text-3xl text-center`};
        }
        p {
          ${tw`text-gray-400 text-xl text-center`};
        }
      }
    }
  }
`;

const Index = () => {
  return (
    <StyledIndex>
      <div>
        <Head>
          <title>0x81d</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="banner">
            <h1>Welcome to My Website 🚧(WIP)</h1>
            <p>I am learning by doing so...</p>

            <wbr />

            <p>I'm working on the design of this website ⏳</p>
          </div>
        </main>
      </div>
    </StyledIndex>
  );
};

export default Index;
