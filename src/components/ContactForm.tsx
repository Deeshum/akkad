import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
    webhookUrl: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.webhookUrl) {
      toast({
        title: "Webhook URL Required",
        description: "Please enter your Zapier webhook URL to receive form submissions.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(formData.webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          project: formData.project,
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: "Akkad Consultants Website"
        }),
      });

      toast({
        title: "Message Sent",
        description: "Your inquiry has been submitted. We'll be in touch soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        project: '',
        message: '',
        webhookUrl: formData.webhookUrl // Keep webhook URL
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-center mb-4">
          Start Your Project
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Ready to create architectural excellence? Let's design something extraordinary together.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          {/* Zapier Webhook URL */}
          <div className="mb-8 p-4 border border-accent/20 rounded-lg bg-accent/5">
            <label htmlFor="webhookUrl" className="block text-sm font-medium mb-2 text-accent">
              Zapier Webhook URL *
            </label>
            <Input
              id="webhookUrl"
              name="webhookUrl"
              type="url"
              value={formData.webhookUrl}
              onChange={handleChange}
              placeholder="https://hooks.zapier.com/hooks/catch/..."
              className="bg-background border-accent/30"
              required
            />
            <p className="text-xs text-muted-foreground mt-2">
              Create a Zap with a webhook trigger to receive form submissions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name *
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-background"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-background"
              />
            </div>
          </div>

            <div>
              <label htmlFor="project" className="block text-sm font-medium mb-2">
                Project Type
              </label>
              <Input
                id="project"
                name="project"
                value={formData.project}
                onChange={handleChange}
                placeholder="Residential, Commercial, Cultural, Urban Planning..."
              className="bg-background"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Tell us about your architectural vision *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              className="bg-background"
              placeholder="Describe your project scope, site requirements, sustainability goals, and design preferences..."
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full interactive bg-accent hover:bg-accent/90 text-white font-medium py-6 text-lg"
          >
            {isLoading ? "Sending..." : "Submit Inquiry"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;