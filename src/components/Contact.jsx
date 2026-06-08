import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEngine } from '../utils/audio';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('IDLE'); // IDLE, SENDING, SUCCESS
  const [logMessages, setLogMessages] = useState([]);

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Required';
    if (!form.email.trim()) {
      nextErrors.email = 'Required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = 'Invalid email';
    }
    if (!form.message.trim()) nextErrors.message = 'Required';
    
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
    // Play a tiny high-pitched bleep simulating keyboard clicks on typing
    soundEngine.playBleep(1800, 0.015);
  };

  const runSubmitLogs = () => {
    const logSteps = [
      'Establishing Secure Uplink Handshake...',
      'Encrypting data package payload with SSL/TLS keys...',
      'Routing telemetry stream through proxy gateway...',
      'Bypassing firewall anti-spam buffer checkpoints...',
      'Message package broadcast successful. Main sync queue updated.',
    ];

    logSteps.forEach((msg, idx) => {
      setTimeout(() => {
        setLogMessages(prev => [...prev, msg]);
        soundEngine.playBleep(1000 + idx * 200, 0.06);
      }, (idx + 1) * 350);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      soundEngine.playBleep(400, 0.15); // error tone
      return;
    }

    soundEngine.playClick();
    setStatus('SENDING');
    setLogMessages([]);
    runSubmitLogs();

    setTimeout(() => {
      setStatus('SUCCESS');
      soundEngine.playBoot(); // completion sweep sound
      
      confetti({
        particleCount: 50,
        spread: 45,
        origin: { y: 0.8 },
        colors: ['#00f2fe', '#ffffff', '#9b51e0']
      });

      setForm({ name: '', email: '', message: '' });
    }, 2000);
  };

  const handleHover = () => {
    soundEngine.playBleep(1500, 0.04);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto text-left relative overflow-hidden">
      
      {/* Background visual watermarks */}
      <div className="absolute right-10 bottom-10 text-[14rem] md:text-[20rem] font-mono select-none pointer-events-none z-0 text-accentCyan/[0.01] tracking-widest font-black uppercase">
        TERM_04
      </div>

      {/* Title Header */}
      <div className="space-y-3 mb-16 text-center max-w-2xl mx-auto relative z-10">
        <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest text-white uppercase">
          &gt; ESTABLISH_CONNECTION
        </h2>
        <div className="w-24 h-[2px] bg-accentCyan mx-auto shadow-[0_0_10px_#00f2fe]" />
      </div>

      {/* Form Container */}
      <div className="bg-[#02000a]/75 border border-accentCyan/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md relative z-10">
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-accentCyan/40" />
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-accentCyan/40" />

        <AnimatePresence mode="wait">
          {status !== 'SUCCESS' ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Row 1: Split inputs for Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full name input */}
                <div className="space-y-1.5 text-left">
                  <label className="font-mono text-[9px] font-bold text-accentCyan/60 uppercase tracking-widest">
                    Sender Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInput}
                      onFocus={handleHover}
                      disabled={status === 'SENDING'}
                      className={`w-full px-4 py-3 rounded-xl bg-black/45 border text-xs font-mono text-white placeholder-gray-600 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-accentPink focus:border-accentPink text-accentPink'
                          : 'border-accentCyan/15 focus:border-accentCyan/60 focus:shadow-[0_0_12px_rgba(0,242,254,0.15)] text-accentCyan'
                      }`}
                      placeholder="> IDENTIFY_NAME..."
                    />
                    {errors.name && (
                      <div className="absolute right-3 top-3 text-accentPink">
                        <AlertCircle size={14} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Email address input */}
                <div className="space-y-1.5 text-left">
                  <label className="font-mono text-[9px] font-bold text-accentCyan/60 uppercase tracking-widest">
                    Return Coordinates (Email)
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInput}
                      onFocus={handleHover}
                      disabled={status === 'SENDING'}
                      className={`w-full px-4 py-3 rounded-xl bg-black/45 border text-xs font-mono text-white placeholder-gray-600 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-accentPink focus:border-accentPink text-accentPink'
                          : 'border-accentCyan/15 focus:border-accentCyan/60 focus:shadow-[0_0_12px_rgba(0,242,254,0.15)] text-accentCyan'
                      }`}
                      placeholder="> COMM_ROUTE@DOMAIN.COM..."
                    />
                    {errors.email && (
                      <div className="absolute right-3 top-3 text-accentPink" title={errors.email}>
                        <AlertCircle size={14} />
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {/* Row 2: Full-width Textarea for Message */}
              <div className="space-y-1.5 text-left">
                <label className="font-mono text-[9px] font-bold text-accentCyan/60 uppercase tracking-widest">
                  Signal Payload (Message)
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleInput}
                    onFocus={handleHover}
                    disabled={status === 'SENDING'}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-xl bg-black/45 border text-xs font-mono text-white placeholder-gray-600 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-accentPink focus:border-accentPink text-accentPink'
                        : 'border-accentCyan/15 focus:border-accentCyan/60 focus:shadow-[0_0_12px_rgba(0,242,254,0.15)] text-accentCyan'
                    }`}
                    placeholder="> COMPOSE TRANSMISSION SIGNAL DETAILS HERE..."
                  />
                  {errors.message && (
                    <div className="absolute right-3 top-3 text-accentPink">
                      <AlertCircle size={14} />
                    </div>
                  )}
                </div>
              </div>

              {/* Row 3: Submit Button */}
              <button
                type="submit"
                disabled={status === 'SENDING'}
                onMouseEnter={handleHover}
                className="w-full flex items-center justify-center space-x-2 py-4 rounded-xl border border-accentCyan/30 hover:border-accentCyan bg-accentCyan/5 hover:bg-accentCyan/15 text-accentCyan hover:text-white font-mono font-extrabold text-[10px] uppercase tracking-widest transition-all hover:scale-[1.01] active:scale-97 disabled:opacity-50 hover:shadow-[0_0_15px_rgba(0,242,254,0.15)]"
                data-cursor="pointer"
              >
                <span>{status === 'SENDING' ? 'TRANSMITTING SIGNAL DATA...' : 'BROADCAST_TRANSMISSION'}</span>
                <Send size={12} className="translate-x-0.5" />
              </button>
            </motion.form>
          ) : (
            /* Success feedback with diagnostic console log */
            <motion.div
              key="success"
              className="h-full flex flex-col justify-between min-h-[300px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <div className="space-y-4 text-left">
                <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400">
                  <CheckCircle size={20} />
                </div>
                
                <h3 className="font-mono text-xs font-black text-white uppercase tracking-widest">UPLINK_CONNECTION_ESTABLISHED</h3>
                <p className="font-mono text-[10px] text-gray-400 leading-relaxed">
                  Success. Your message signal payload has bypassed spam validation buffer checkpoints and has been cataloged to the core server queue.
                </p>
              </div>

              {/* Terminal Logs console */}
              <div className="flex-1 my-4 p-4 rounded-2xl bg-black/60 border border-accentCyan/10 font-mono text-[9px] text-accentCyan space-y-1.5 h-36 overflow-y-auto text-left shadow-inner">
                {logMessages.map((msg, idx) => (
                  <div key={idx} className="flex items-center">
                    <span className="mr-2 text-accentCyan/65">&gt;&gt;</span>
                    <span>{msg}</span>
                  </div>
                ))}
                {logMessages.length < 5 && (
                  <div className="w-1 h-3 bg-accentCyan animate-pulse" />
                )}
              </div>

              <button
                onClick={() => { soundEngine.playClick(); setStatus('IDLE'); }}
                onMouseEnter={handleHover}
                className="w-full py-3 rounded-xl bg-black/40 border border-accentCyan/20 text-xs font-mono font-bold uppercase text-gray-300 hover:text-white transition-all hover:bg-accentCyan/5"
                data-cursor="pointer"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
};

export default Contact;
