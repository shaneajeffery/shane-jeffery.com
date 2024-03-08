import Markdown from '@/components/ReactMarkdown';
import { useEffect, useRef, useState } from 'react';

const FaqItem = ({ index, item }) => {
    const contentRef = useRef(null);
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    useEffect(() => {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    }, []);

    useEffect(() => {
        contentRef.current.style.maxHeight = isCollapsed
            ? '0'
            : `${contentRef.current.scrollHeight}px`;
    }, [isCollapsed]);

    return (
        <div className={`${index === 0 ? 'border-t' : ''} border-b`}>
            <h3
                className="flex cursor-pointer select-none items-center justify-between py-5 text-lg font-medium"
                onClick={toggleCollapse}
                role="button"
                tabIndex={0}
            >
                <span className="grow">{item.question}</span>
                <span className="shrink-0">
                    {isCollapsed ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                        >
                            <path
                                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                                fill="currentColor"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                        >
                            <path
                                d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                                fill="currentColor"
                            />
                        </svg>
                    )}
                </span>
            </h3>
            <div
                className="overflow-hidden leading-normal text-black/75"
                ref={contentRef}
                style={{
                    transition:
                        'max-height 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
            >
                <div className="content content-dark -mt-[6px] mb-5">
                    <Markdown content={item.answer} />
                </div>
            </div>
        </div>
    );
};

export default FaqItem;
