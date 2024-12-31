// src/components/LandingPage.jsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Zap, FileText } from 'lucide-react';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Navigate Your Documents.<br/>
            <span className="text-[#0EA5E9]">Unlock Their Insights.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Transform your documents into actionable insights with our AI-powered analysis tool.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#0EA5E9] hover:bg-[#0284C7]"
              onClick={() => window.location.href = '/analyze'}
            >
              Try Now Free
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-4 py-16 bg-gray-50">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <CardContent className="space-y-4 pt-4">
              <div className="h-12 w-12 rounded-lg bg-[#0EA5E9] bg-opacity-10 flex items-center justify-center">
                <Brain className="h-6 w-6 text-[#0EA5E9]" />
              </div>
              <h3 className="text-xl font-semibold">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Advanced machine learning algorithms understand your documents like a human would.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="space-y-4 pt-4">
              <div className="h-12 w-12 rounded-lg bg-[#0EA5E9] bg-opacity-10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-[#0EA5E9]" />
              </div>
              <h3 className="text-xl font-semibold">Instant Results</h3>
              <p className="text-gray-600">
                Get summaries, key points, and actionable insights in seconds.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="space-y-4 pt-4">
              <div className="h-12 w-12 rounded-lg bg-[#0EA5E9] bg-opacity-10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-[#0EA5E9]" />
              </div>
              <h3 className="text-xl font-semibold">Any Document</h3>
              <p className="text-gray-600">
                Support for PDF, DOCX, TXT and more file formats.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0EA5E9] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Start Understanding Your Documents Today
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Join thousands of users who trust docNsight for their document analysis needs.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-[#0EA5E9] hover:bg-gray-100"
            onClick={() => window.location.href = '/analyze'}
          >
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
};
