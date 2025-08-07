import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import { supabase } from '../lib/supabase';
import {
  HeroSection,
  AccentText,
  BigHeading,
  SubHeading,
  BodyText,
} from '../components/styled';
import styled from 'styled-components';
import BackToTop from '../components/Back';

const AskWrapper = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  font-size: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  font-family: inherit;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background: var(--moss);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-start;
  transition: background 0.2s ease;

  &:hover {
    background: var(--dark-moss);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const NoteBlock = styled.div`
  background-color: #DDE5B6;
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  font-family: inherit;
  position: relative;
  min-height: 120px;
`;

const QuestionText = styled.p`
  font-weight: bold;
  color: var(--dark-olive);
  margin-bottom: 1rem;
`;

const AnswerSection = styled.div`
  margin-top: 0.75rem;
  font-size: 0.95rem;
  color: var(--coffee);
`;

const ToggleButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: transparent;
  border: 2px dashed var(--moss);
  color: var(--moss);
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--moss);
    color: white;
  }
`;

const AskPage = () => {
  const [question, setQuestion] = useState('');
  const [qaList, setQAList] = useState([]);
  const [shownAnswers, setShownAnswers] = useState({});

  // Fetch questions on mount
  useEffect(() => {
    const fetchQuestions = async () => {
      const { data, error } = await supabase
        .from('questions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading questions:', error);
      } else {
        setQAList(data);
      }
    };

    fetchQuestions();
  }, []);

  // Submit question
  const submitQuestion = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    const { data, error } = await supabase
      .from('questions')
      .insert([{ question: question.trim() }])
      .select();

    if (error) {
      console.error('Insert error:', error);
      alert(`Failed to submit your question: ${error.message}`);
    } else if (data?.length > 0) {
      setQAList((prev) => [data[0], ...prev]);
      setQuestion('');
    }
  };

  // Toggle answer visibility
  const handleToggleAnswer = (id) => {
    setShownAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Layout pageTitle="">
      <HeroSection>
        <AccentText>Ask Me Anything...</AccentText>
        <BigHeading>Leave a message</BigHeading>
        <SubHeading>
          Curious about my music taste, tech stack, or what my dog eats? Ask away! <br />
          I’ll post answers here once I reply.
        </SubHeading>
        <BodyText>
          Questions are anonymous unless you include your name. You can ask me anything about tech, music, or life.<br />
          <strong>This form does not store your identity.</strong><br />
          <strong>Note:</strong> I may not answer all questions, but I’ll try my best to respond to as many as possible.<br />
          <br />
          <strong>DO NOT POST ANYTHING OFFENSIVE!!!</strong>
        </BodyText>
      </HeroSection>

      <AskWrapper>
        <Form onSubmit={submitQuestion}>
          <TextArea
            rows="4"
            placeholder="Type your question or message here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <SubmitButton type="submit" disabled={!question.trim()}>
            Submit
          </SubmitButton>
        </Form>

        {qaList.map((qa) => (
          <NoteBlock key={qa.id}>
            <QuestionText>Q: {qa.question}</QuestionText>

            {shownAnswers[qa.id] && (
              <AnswerSection>
                <p><strong>A:</strong> {qa.answer ?? "Check later~ I haven't checked yet."}</p>
              </AnswerSection>
            )}

            <ToggleButton onClick={() => handleToggleAnswer(qa.id)}>
              {shownAnswers[qa.id] ? 'Hide Answer' : 'See Answer'}
            </ToggleButton>
          </NoteBlock>
        ))}
      </AskWrapper>
      <BackToTop />
    </Layout>
  );
};

export default AskPage;
