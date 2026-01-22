import { useState, useEffect, useRef } from 'react';
import { executeCommand } from './commands';

const Terminal = () => {
  const [input, setInput] = useState('');
  const welcomeMessage = {
    type: 'output',
    content: `
╔════════════════════════════════════════════════════════════════╗
║          Bievenido a mi Portafolio Digital                     ║
╚════════════════════════════════════════════════════════════════╝

Escribe 'help' para ver los comandos disponibles.
    `.trim()
  };
  const [lastCommand, setLastCommand] = useState(null);
  const [lastOutput, setLastOutput] = useState(welcomeMessage);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Auto-scroll al final cuando se añade nuevo contenido
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lastCommand, lastOutput]);

  // Focus automático en el input al cargar
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Click en cualquier parte de la terminal enfoca el input
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  // Manejar el envío de comandos
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (input.trim() === '') return;

    // Ejecutar comando
    const output = executeCommand(input);

    // Si es el comando clear, mostrar solo el mensaje de bienvenida
    if (output === 'CLEAR_COMMAND') {
      setLastCommand(null);
      setLastOutput(welcomeMessage);
      setInput('');
      setCommandHistory([...commandHistory, input]);
      setHistoryIndex(-1);
      return;
    }

    // Guardar solo el último comando y su salida
    setLastCommand(input);
    setLastOutput(output ? {
      type: 'output',
      content: output
    } : null);

    setCommandHistory([...commandHistory, input]);
    setHistoryIndex(-1);
    setInput('');
  };

  // Navegación por historial de comandos con flechas
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      
      const newIndex = historyIndex === -1 
        ? commandHistory.length - 1 
        : Math.max(0, historyIndex - 1);
      
      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      
      const newIndex = historyIndex + 1;
      
      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    }
  };

  return (
    <div 
      className="h-screen w-screen bg-terminal-bg text-terminal-text font-mono overflow-hidden flex flex-col"
      onClick={handleTerminalClick}
    >
      {/* Contenido del terminal */}
      <div 
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-4 pb-20"
      >
        {/* Mostrar solo el último comando y su salida */}
        {lastCommand && (
          <div className="mb-2">
            <div className="flex items-start">
              <span className="text-terminal-text mr-2">$</span>
              <span className="text-terminal-text">{lastCommand}</span>
            </div>
          </div>
        )}
        {lastOutput && (
          <div className="mb-2">
            <div className="whitespace-pre-wrap text-terminal-text ml-4">
              {lastOutput.content}
            </div>
          </div>
        )}
      </div>

      {/* Input fijo en la parte inferior */}
      <div className="border-t border-terminal-text/30 bg-terminal-bg p-4">
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-terminal-text mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-terminal-text outline-none caret-terminal-cursor font-mono"
            aria-label="Terminal input"
            autoComplete="off"
            spellCheck="false"
          />
          <span className="animate-pulse text-terminal-cursor ml-1">▊</span>
        </form>
      </div>
    </div>
  );
};

export default Terminal;
