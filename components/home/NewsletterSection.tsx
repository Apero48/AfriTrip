"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Gift, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail("");
        }
    };

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/20 rounded-full blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/20 rounded-full blur-2xl" />

                    <div className="relative">
                        {/* Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/30"
                        >
                            {subscribed ? (
                                <CheckCircle className="w-8 h-8 text-white" />
                            ) : (
                                <Gift className="w-8 h-8 text-white" />
                            )}
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl sm:text-3xl font-black text-white mb-4"
                        >
                            {subscribed ? (
                                "Merci pour votre inscription !"
                            ) : (
                                <>
                                    Recevez nos <span className="text-amber-400">offres exclusives</span>
                                </>
                            )}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 mb-8 max-w-lg mx-auto"
                        >
                            {subscribed ? (
                                "Vous recevrez bientôt nos meilleures offres directement dans votre boîte mail."
                            ) : (
                                "Inscrivez-vous à notre newsletter et recevez 10% de réduction sur votre première réservation, plus les meilleures offres en avant-première."
                            )}
                        </motion.p>

                        {!subscribed && (
                            <motion.form
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                onSubmit={handleSubmit}
                                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                            >
                                <div className="relative flex-1">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <Input
                                        type="email"
                                        placeholder="Votre adresse email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-12 h-14 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 rounded-xl focus:border-amber-500 focus:ring-amber-500"
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="h-14 px-8 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all"
                                >
                                    S'inscrire
                                    <Send className="w-4 h-4 ml-2" />
                                </Button>
                            </motion.form>
                        )}

                        {/* Trust Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-6 text-slate-500 text-sm"
                        >
                            🔒 Nous respectons votre vie privée. Désabonnement en un clic.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
