import { useTranslation } from 'react-i18next';
import React, { useRef, useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contents, setContents] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const nameRef = useRef<HTMLInputElement|null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const contentsRef = useRef<HTMLTextAreaElement | null>(null);

  const { t } = useTranslation();
  const form = useRef<HTMLFormElement | null>(null); // 수정된 부분

  const validateForm = () => {
    if (!nameRef.current?.value) {
      nameRef.current?.focus();
      return false;
    }
    if (!emailRef.current?.value) {
      emailRef.current?.focus();
      return false;
    }
    if (!contentsRef.current?.value) {
      contentsRef.current?.focus();
      return false;
    }
    return true;
  };

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    const formElement = form.current;
    if (!formElement) {
      return;
    }
    setIsDisabled(true);
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      toast({
        description: '이메일 발송이 완료되었습니다.',
      });

      setName('');
      setEmail('');
      setContents('');
    } catch (e) {
      console.error(e);
      toast({
        description: '이메일 발송이 실패되었습니다.',
      });
    } finally {
      setIsDisabled(false);
      setLoading(false);
    }
  };
  return (
    <div id="contact" className="relative overflow-hidden before:absolute before:start-1/2 before:top-0">
      <div className="mx-auto max-w-[85rem] px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto mt-5 max-w-2xl text-center">
          <h1 className="block text-4xl font-bold text-gray-800 dark:text-gray-200 md:text-5xl lg:text-6xl">
            {t('contact.title')}
            <span className="bg-gradient-to-tl from-blue-600 to-violet-600 bg-clip-text text-transparent" />
          </h1>
        </div>
        <div className="flex justify-center items-center  ">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full max-w-sm items-center gap-4">
            <div className="w-full">
              <Label htmlFor="name">Name</Label>
              <Input
                value={name}
                type="text"
                name="reply_to"
                ref={nameRef}
                placeholder="이름을 입력해주세요."
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full">
              <Label htmlFor="email">Email</Label>
              <Input
                value={email}
                type="email"
                name="from_name"
                ref={emailRef}
                placeholder="이메일을 입력해주세요."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full">
              <Label htmlFor="message-2">Your Message</Label>
              <Textarea
                value={contents}
                placeholder="내용을 적어주세요."
                name="message"
                ref={contentsRef}
                onChange={(e) => setContents(e.target.value)}
              />

              {isDisabled || loading ? (

                <Input
                  disabled
                  value="Send"
                  type="submit"
                  className="cursor-pointer  mt-3 hover:text-white transition-colors duration-300"
                />

              ) : (
                <Input
                  value={loading ? 'Sending...' : 'Send'}
                  type="submit"
                  className="cursor-pointer mt-3 hover:bg-[#29B6F6] hover:text-black transition-colors duration-300"
                />
              ) }

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
