'use client';

import { Mail, Phone, MessageSquare, ThumbsUp, Send, HelpCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import DashboardLayout from '@/components/layout/DashboardLayout';


export default function HelpPage() {
  return (
    <DashboardLayout currentPage="help">
    <div className="h-full w-full p-6 space-y-8 overflow-y-auto">
      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-start space-y-2">
          <Mail className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
          <p className="text-sm text-gray-600">support@eduflow.com</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-start space-y-2">
          <Phone className="w-6 h-6 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-800">Call Support</h3>
          <p className="text-sm text-gray-600">+1 (800) 123-4567</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md flex flex-col items-start space-y-2">
          <MessageSquare className="w-6 h-6 text-purple-600" />
          <h3 className="text-lg font-semibold text-gray-800">Live Chat</h3>
          <p className="text-sm text-gray-600">Available Mon–Fri, 9am–6pm</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
  <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4">
    <HelpCircle className="w-5 h-5 text-blue-500" />
    Frequently Asked Questions
  </h2>

  <Accordion type="multiple" className="w-full space-y-2">
    <AccordionItem value="faq-1">
      <AccordionTrigger className="text-left text-gray-800 font-medium">
        How do I reset my password?
      </AccordionTrigger>
      <AccordionContent className="text-sm text-gray-600">
        Go to Settings → Account → Change Password. You’ll be prompted to enter your current password and a new one.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="faq-2">
      <AccordionTrigger className="text-left text-gray-800 font-medium">
        Where can I track my course progress?
      </AccordionTrigger>
      <AccordionContent className="text-sm text-gray-600">
        Visit your dashboard and open the “My Courses” tab to view your progress and achievements.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="faq-3">
      <AccordionTrigger className="text-left text-gray-800 font-medium">
        How do I contact my instructor?
      </AccordionTrigger>
      <AccordionContent className="text-sm text-gray-600">
        Navigate to the course page and use the “Message Instructor” button found in the top-right corner.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</div>


      {/* Help Us Improve Section */}
      <div className="bg-white rounded-2xl p-6 shadow-md space-y-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <ThumbsUp className="w-5 h-5 text-green-500" />
          Help Us Improve
        </h2>
        <p className="text-sm text-gray-600">
          We’d love your feedback to make EduFlow even better.
        </p>
        <form className="space-y-4">
          <Input placeholder="Your Name (optional)" />
          <Input placeholder="Your Email (optional)" type="email" />
          <Textarea placeholder="What can we do better?" className="min-h-[120px]" />
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
            <Send className="w-4 h-4 mr-2" />
            Submit Feedback
          </Button>
        </form>
      </div>
    </div>
    </DashboardLayout>
  );
}
