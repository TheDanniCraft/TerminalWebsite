'use client';

import CommandError from './components/CommandError.js'
import CommandUsage from './components/CommandUsage.js';
import AboutCommand from './components/commands/AboutCommand.js';
import ContactCommand from './components/commands/ContactCommand.js';
import EchoCommand from './components/commands/EchoCommand.js';
import HelpCommand from './components/commands/HelpCommand.js'
import CommandHistoryCommand from './components/commands/CommandHistoryCommand.js';
import ProjectCommand from './components/commands/ProjectCommand.js';
import SocialsCommand from './components/commands/SocialsCommand.js';
import WelcomeCommand from './components/commands/WelcomeCommand.js';
import WhoAmICommand from './components/commands/WhoAmICommand.js';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const commandHistory = [];
let historyIndex = 0;
const commands = ["about", "clear", "contact", "echo", "exit", "help", "history", "projects", "projects go", "socials", "socials go", "welcome", "whoami"];

export default function Home() {
  const commandRef = useRef(null);
  const scrollRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [appendedElements, setAppendedElements] = useState([])

  const handleSubmit = () => {
    commandHistory.push(inputValue);

    setInputValue('');

    let newElement;

    const args = inputValue.trim().split(' ');
    const command = args.shift().toLowerCase();

    switch (command) {
      case 'about':
        if (args.length > 0) {
          newElement = <CommandUsage usage={"about"} command={inputValue}></CommandUsage>
          break;
        }
        newElement = <AboutCommand command={inputValue}></AboutCommand>
        break;
      case 'clear':
        if (args.length > 0) {
          newElement = <CommandUsage usage={"clear"} command={inputValue}></CommandUsage>
          break;
        }
        setAppendedElements([]);
        break;
      case 'contact':
        if (args.length > 0) {
          newElement = <CommandUsage usage={"contact"} command={inputValue}></CommandUsage>
          break;
        }
        newElement = <ContactCommand command={inputValue}></ContactCommand>
        break;
      case 'echo':
        if (args.length < 1) {
          newElement = <CommandUsage usage={"echo <Text>"} command={inputValue}></CommandUsage>
          break;
        }
        newElement = <EchoCommand message={args.join(" ")} command={inputValue}></EchoCommand>
        break;
      case 'exit':
        if (args.length > 0) {
          newElement = <CommandUsage usage={"exit"} command={inputValue}></CommandUsage>
          break;
        }
        history.back();
        break;
      case 'help':
        if (args.length > 0) {
          newElement = <CommandUsage usage={"help"} command={inputValue}></CommandUsage>
          break;
        }
        newElement = <HelpCommand command={inputValue}></HelpCommand>
        break;
      case 'history':
        if (args.length > 0) {
          newElement = <CommandUsage usage={"history"} command={inputValue}></CommandUsage>
          break;
        }
        newElement = <CommandHistoryCommand history={commandHistory} command={inputValue}></CommandHistoryCommand>
        break;
      case 'projects':
        newElement = <ProjectCommand command={inputValue} args={args}></ProjectCommand>
        break;
      case 'socials':
        newElement = <SocialsCommand command={inputValue} args={args}></SocialsCommand>
        break;
      case 'welcome':
        if (args.length > 0) {
          newElement = <CommandUsage usage={"welcome"} command={inputValue}></CommandUsage>
          break;
        }
        newElement = <WelcomeCommand command={inputValue}></WelcomeCommand>
        break;
      case 'whoami':
        if (args.length > 0) {
          newElement = <CommandUsage usage={"whoami"} command={inputValue}></CommandUsage>
          break;
        }
        newElement = <WhoAmICommand command={inputValue}></WhoAmICommand>
        break;
      default:
        newElement = <CommandError command={inputValue}></CommandError>;
    }
    setAppendedElements(prevElements => [...prevElements, newElement]);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'ArrowUp') {
      if (commandHistory.length > 0 && commandHistory.length > historyIndex) {
        historyIndex++;
        setInputValue(commandHistory[commandHistory.length - historyIndex]);
      }
    }
    if (event.key === 'ArrowDown') {
      if (commandHistory.length > 0 && historyIndex > 0) {
        historyIndex--;
        setInputValue(commandHistory[commandHistory.length - historyIndex]);
      }
      if (historyIndex === 0) {
        setInputValue('');
      }
    }
    if (event.key === 'Enter') {
      historyIndex = 0;
      handleSubmit();
    }
    if (event.key === 'Tab') {
      event.preventDefault();

      const matchingSuggestion = commands.find((suggestion) =>
        suggestion.startsWith(inputValue)
      );

      if (matchingSuggestion) {
        setInputValue(matchingSuggestion);
      }
    }
  };

  const regainCommandFocus = event => {
    commandRef.current.focus();
  };

  useEffect(() => {
    if (commandRef.current) {
      commandRef.current.focus();
    }
  }, []);

  useLayoutEffect(() => {
    scrollToBottom();
  });

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'auto' });
  };

  return (
    <main>
      <script defer data-domain="thedannicraft.de" src="https://analytics.thedannicraft.de/js/script.js"></script>
      <div style={{ padding: 20, paddingTop: 12 }}>
        <div class="terminal">
          <WelcomeCommand command={"welcome"}></WelcomeCommand>
          {appendedElements.map((element, index) => (
            <React.Fragment key={index}>{element}</React.Fragment>
          ))}
        </div>
        <p class="commandWrapper" style={{ paddingTop: 10 }} ref={scrollRef}>
          <span class="prefix">visitor</span>@<span class="secondary">thedannicraft.de</span>:~$ <input class="commandPromt" style={{ paddingLeft: 5 }} ref={commandRef} onBlur={regainCommandFocus} type="text" value={inputValue} onChange={handleChange} onKeyDown={handleKeyPress}></input>
          <label htmlFor="commandPromt" class="hiddenLabel">Enter your command:</label>
        </p>
      </div>
    </main >
  )
}
