'use client';

import Image from 'next/image';
import { SyntheticEvent, useEffect, useMemo, useRef, useState } from 'react';

type ChatMessage = {
    role: 'user' | 'assistant';
    text: string;
};

const GenieChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLogoError, setIsLogoError] = useState(false);
    const panelRef = useRef<HTMLElement | null>(null);
    const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            role: 'assistant',
            text: "Hej 👋 I am Iliyaz's AI sidekick. Ask me anything about his work. I promise I only hallucinate confidence, not projects 🤣",
        },
    ]);

    const canSend = useMemo(() => input.trim().length > 0 && !isLoading, [input, isLoading]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const onPointerDown = (event: MouseEvent | TouchEvent) => {
            const target = event.target as Node;

            if (panelRef.current?.contains(target)) {
                return;
            }

            if (toggleButtonRef.current?.contains(target)) {
                return;
            }

            setIsOpen(false);
        };

        document.addEventListener('mousedown', onPointerDown);
        document.addEventListener('touchstart', onPointerDown);

        return () => {
            document.removeEventListener('mousedown', onPointerDown);
            document.removeEventListener('touchstart', onPointerDown);
        };
    }, [isOpen]);

    const onSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        const message = input.trim();
        if (!message || isLoading) {
            return;
        }

        const updatedMessages = [...messages, { role: 'user', text: message } as ChatMessage];
        setMessages(updatedMessages);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            if (!response.ok) {
                const failure = await response.json().catch(() => ({}));
                const errorMessage =
                    typeof failure.error === 'string'
                        ? failure.error
                        : 'Could not reach the assistant. Please try again.';

                setMessages((prev) => [...prev, { role: 'assistant', text: errorMessage }]);
                return;
            }

            const data = (await response.json()) as { reply?: string };
            const reply = data.reply?.trim() || 'Im not trained to have an answer right now. Please try something else 🤔';
            setMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
        } catch {
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', text: 'Network issue detected. Please retry in a moment.' },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ position: 'fixed', right: '1rem', bottom: '1rem', zIndex: 60 }}>
            {isOpen && (
                <section
                    ref={panelRef}
                    style={{
                        width: 'min(360px, calc(100vw - 2rem))',
                        height: '500px',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        borderRadius: '0.9rem',
                        boxShadow: 'var(--shadow)',
                        marginBottom: '0.75rem',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                    }}
                >
                    <header
                        style={{
                            padding: '0.9rem 1rem',
                            borderBottom: '1px solid var(--border)',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <span>Ask Iliyaz's Genie</span>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chat"
                            style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '0.45rem',
                                border: '1px solid var(--border)',
                                background: 'var(--bg-secondary)',
                                color: 'var(--text-primary)',
                                fontSize: '1rem',
                                lineHeight: 1,
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            ×
                        </button>
                    </header>

                    <div
                        style={{
                            flex: 1,
                            padding: '0.9rem',
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.7rem',
                        }}
                    >
                        {messages.map((item, index) => (
                            <div
                                key={`${item.role}-${index}`}
                                style={{
                                    alignSelf: item.role === 'user' ? 'flex-end' : 'flex-start',
                                    maxWidth: '85%',
                                    padding: '0.6rem 0.75rem',
                                    borderRadius: '0.65rem',
                                    background: item.role === 'user' ? 'var(--accent)' : 'var(--bg-secondary)',
                                    color: item.role === 'user' ? '#fff' : 'var(--text-primary)',
                                    lineHeight: 1.45,
                                    fontSize: '0.92rem',
                                }}
                            >
                                {item.text}
                            </div>
                        ))}

                        {isLoading && (
                            <div
                                style={{
                                    alignSelf: 'flex-start',
                                    padding: '0.6rem 0.75rem',
                                    borderRadius: '0.65rem',
                                    background: 'var(--bg-secondary)',
                                    fontSize: '0.9rem',
                                    color: 'var(--text-secondary)',
                                }}
                            >
                                Thinking...
                            </div>
                        )}
                    </div>

                    <form
                        onSubmit={onSubmit}
                        style={{
                            borderTop: '1px solid var(--border)',
                            padding: '0.75rem',
                            display: 'flex',
                            gap: '0.5rem',
                        }}
                    >
                        <input
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            placeholder="Ask about projects, skills, or contact"
                            style={{
                                flex: 1,
                                border: '1px solid var(--border)',
                                borderRadius: '0.55rem',
                                padding: '0.55rem 0.7rem',
                                background: 'var(--bg-primary)',
                                color: 'var(--text-primary)',
                            }}
                        />
                        <button
                            type="submit"
                            disabled={!canSend}
                            style={{
                                borderRadius: '0.55rem',
                                background: canSend ? 'var(--accent)' : 'var(--border)',
                                color: '#fff',
                                padding: '0.55rem 0.85rem',
                                fontWeight: 600,
                            }}
                        >
                            Send
                        </button>
                    </form>
                </section>
            )}

            <button ref={toggleButtonRef} onClick={() => setIsOpen((prev) => !prev)}>
                {isLogoError ? (
                    'AI'
                ) : (
                    <Image
                        src="/genie.png"
                        alt="Assistant logo"
                        width={56}
                        height={56}
                        onError={() => setIsLogoError(true)}
                        style={{ objectFit: 'cover', borderRadius: '50%' }}
                    />
                )}
            </button>
        </div>
    );
};

export default GenieChatBot;
