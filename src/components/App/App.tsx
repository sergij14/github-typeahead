import React from "react";
import SearchUserContainer from "../SearchUser/SearchUserContainer";
import {
  AppContainer,
  Logo,
  LogoSVG,
  LogoText,
  MockContent,
} from "./App.styles";

const App = () => {
  return (
    <AppContainer>
      <Logo>
        <LogoSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </LogoSVG>
        <LogoText>github typeahead</LogoText>
      </Logo>
      <SearchUserContainer />
      <MockContent>
        <h2>
          The History of Git: The Road to Domination in Software Version Control
        </h2>

        <p>
          In 2005, Linus Torvalds urgently needed a new version control system
          to maintain the development of the Linux Kernel. So he went offline
          for a week, wrote a revolutionary new system from scratch, and called
          it Git. Fifteen years later, the platform is the undisputed leader in
          a crowded field.
        </p>

        <p>
          Worldwide, huge numbers of start-ups, collectives and multinationals,
          including Google and Microsoft, use Git to maintain the source code of
          their software projects. Some host their own Git projects, others use
          Git via commercial hosting companies such as GitHub (founded in 2007),
          Bitbucket (founded in 2010) and GitLab (founded in 2011). The largest
          of these, GitHub, has 40 million registered developers and was
          acquired by Microsoft for a whopping $7.5 billion in 2018.
        </p>

        <p>
          Git (and its competitors) is sometimes categorized as a version
          control system (VCS), sometimes a source code management system (SCM),
          and sometimes a revision control system (RCS). Torvalds thinks life’s
          too short to distinguish between the definitions, so we won’t.
        </p>

        <p>
          Part of the appeal of Git is that it’s open source (like Linux and
          Android). However, there are other open-source VCS, including
          Concurrent Versions System (CVS), Subversion (SVN), Mercurial, and
          Monotone, so that alone does not explain its ascendancy.
        </p>

        <p>
          The best indication of Git’s market dominance is a survey of
          developers by Stack Overflow. This found that 88.4% of 74,298
          respondents in 2018 used Git (up from 69.3% in 2015). The nearest
          competitors were Subversion, with 16.6% penetration (down from 36.9%);
          Team Foundation Version Control, with 11.3% (down from 12.2%); and
          Mercurial, with 3.7% (down from 7.9%). In fact, so dominant has Git
          become that the data scientists at Stack Overflow didn’t bother to ask
          the question in their 2019 survey.
        </p>
      </MockContent>
    </AppContainer>
  );
};

export default App;
