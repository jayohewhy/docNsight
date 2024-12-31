
import React, { useState, useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea.jsx';
import { Progress } from './ui/progress.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs.jsx';
import { Badge } from './ui/badge.jsx';
import { Alert, AlertDescription } from './ui/alert.jsx';
import { File, Upload, X, Loader2, FileText, MessageSquare, ListChecks } from 'lucide-react';

const DocNsight = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [error, setError] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analysis, setAnalysis] = useState(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Reset states
    setError('');
    setUploadProgress(0);
    setText('');

    // Validate file
    const maxSize = 5 * 1024 * 1024; // 5MB
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain'
    ];

    if (file.size > maxSize) {
      setError('File size exceeds 5MB limit');
      return;
    }

    if (!allowedTypes.includes(file.type)) {
      setError('Only PDF, DOCX, and TXT files are supported');
      return;
    }

    try {
      setLoading(true);
      
      // Simulate file upload progress
      for (let i = 0; i <= 100; i += 10) {
        setUploadProgress(i);
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      setUploadedFile(file);
      setText(`Processing ${file.name}...`);
      
      // Simulate analysis
      await analyzeDocument(file);
    } catch (err) {
      setError('Error processing file. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const analyzeDocument = async (file) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setAnalysis({
      summary: "This document discusses key aspects of artificial intelligence and its applications in modern business contexts. The text emphasizes the importance of data-driven decision making and automated processes.",
      wordCount: 500,
      readTime: 3,
      tone: "Positive",
      insights: [
        "Strong focus on AI implementation strategies",
        "Emphasis on practical business applications",
        "Discussion of ROI and efficiency gains"
      ],
      actions: [
        "Review AI implementation timeline",
        "Assess resource requirements",
        "Develop training program"
      ]
    });
  };

  const removeFile = useCallback(() => {
    setUploadedFile(null);
    setText('');
    setUploadProgress(0);
    setAnalysis(null);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Input Section */}
        <Card className="md:h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#0EA5E9]" />
              Document Input
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:border-[#0EA5E9] transition-colors">
              <input
                type="file"
                onChange={handleFileUpload}
                accept=".pdf,.docx,.txt"
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="h-10 w-10 mx-auto mb-4 text-gray-400" />
                <p className="text-sm text-gray-600 mb-2">
                  Drag and drop your file here, or click to browse
                </p>
                <p className="text-xs text-gray-500">
                  Supports PDF, DOCX, and TXT (up to 5MB)
                </p>
              </label>
            </div>

            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {uploadedFile && (
              <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <File className="h-4 w-4 text-[#0EA5E9]" />
                    <span className="text-sm font-medium">{uploadedFile.name}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={removeFile}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                {uploadProgress > 0 && uploadProgress < 100 && (
                  <Progress value={uploadProgress} className="h-2" />
                )}
              </div>
            )}

            <Textarea
              placeholder="Or paste your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-1 mt-4 resize-none"
            />
            
            <Button 
              className="mt-4 bg-[#0EA5E9] hover:bg-[#0284C7]"
              disabled={(!text.trim() && !uploadedFile) || loading}
              onClick={() => analyzeDocument()}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Analyze Document'
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Analysis Section */}
        <Card className="md:h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-[#0EA5E9]" />
              Analysis Results
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            {analysis ? (
              <Tabs defaultValue="summary" className="h-full flex flex-col">
                <TabsList>
                  <TabsTrigger value="summary">Summary</TabsTrigger>
                  <TabsTrigger value="insights">Insights</TabsTrigger>
                  <TabsTrigger value="actions">Actions</TabsTrigger>
                </TabsList>

                <TabsContent value="summary" className="flex-1 mt-4 space-y-4">
                  <div className="flex gap-2">
                    <Badge variant="secondary">{analysis.wordCount} words</Badge>
                    <Badge variant="secondary">{analysis.readTime} min read</Badge>
                    <Badge variant="secondary">{analysis.tone} tone</Badge>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Document Summary</h3>
                    <p className="text-gray-600">{analysis.summary}</p>
                  </div>
                </TabsContent>

                <TabsContent value="insights" className="flex-1 mt-4">
                  <div className="space-y-2">
                    {analysis.insights.map((insight, i) => (
                      <div key={i} className="flex gap-2 items-start bg-gray-50 p-3 rounded-lg">
                        <ListChecks className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#0EA5E9]" />
                        <span>{insight}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="actions" className="flex-1 mt-4">
                  <div className="space-y-2">
                    {analysis.actions.map((action, i) => (
                      <div key={i} className="bg-gray-50 p-3 rounded-lg">
                        {i + 1}. {action}
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                Upload a document or paste text to see analysis results
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DocNsight;