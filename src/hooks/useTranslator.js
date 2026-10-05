import { useState, useCallback } from 'react';
import { translateText } from '../services/translationApi';
import { DEFAULT_SOURCE_LANG, DEFAULT_TARGET_LANG, MAX_CHAR_LIMIT } from '../constants/languages';

export function useTranslator() {
  const [inputText, setInputTextState] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState(DEFAULT_SOURCE_LANG);
  const [targetLanguage, setTargetLanguage] = useState(DEFAULT_TARGET_LANG);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const translate = useCallback(async () => {
    if (!inputText || !inputText.trim()) {
      setError('Please enter some text to translate.');
      return;
    }
    if (inputText.length > MAX_CHAR_LIMIT) {
      setError(`Input exceeds the maximum limit of ${MAX_CHAR_LIMIT} characters.`);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const result = await translateText(inputText.trim(), sourceLanguage, targetLanguage);
      setTranslatedText(result);
    } catch (err) {
      setError(err.message || 'Translation failed. Please try again.');
      setTranslatedText('');
    } finally {
      setLoading(false);
    }
  }, [inputText, sourceLanguage, targetLanguage]);

  const clearText = useCallback(() => {
    setInputTextState('');
    setTranslatedText('');
    setError(null);
  }, []);

  const swapLanguages = useCallback(() => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
    if (translatedText.trim()) {
      setInputTextState(translatedText);
      setTranslatedText(inputText);
    }
    setError(null);
  }, [sourceLanguage, targetLanguage, inputText, translatedText]);

  const setInputText = useCallback((text) => {
    if (text.length <= MAX_CHAR_LIMIT) {
      setInputTextState(text);
    } else {
      setInputTextState(text.slice(0, MAX_CHAR_LIMIT));
    }
    if (error) setError(null);
  }, [error]);

  return {
    inputText,
    setInputText,
    translatedText,
    sourceLanguage,
    setSourceLanguage,
    targetLanguage,
    setTargetLanguage,
    loading,
    error,
    setError,
    translate,
    clearText,
    swapLanguages,
    maxCharLimit: MAX_CHAR_LIMIT
  };
}
