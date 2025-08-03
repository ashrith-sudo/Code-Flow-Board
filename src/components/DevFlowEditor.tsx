import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Copy, Share, Settings, Play } from 'lucide-react';

interface CollaboratorCursor {
  id: string;
  name: string;
  color: string;
  x: number;
  y: number;
}

const DevFlowEditor = () => {
  const [code, setCode] = useState(`// Welcome to DevFlow - Real-time Code Collaboration
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Try editing this code!
console.log("Hello DevFlow!");`);

  const [collaborators] = useState([
    { id: '1', name: 'Alex', avatar: '', color: '#00BFFF', active: true },
    { id: '2', name: 'Maya', avatar: '', color: '#FF6B6B', active: true },
    { id: '3', name: 'Sam', avatar: '', color: '#4ECDC4', active: false },
  ]);

  const [cursors, setCursors] = useState<CollaboratorCursor[]>([
    { id: '1', name: 'Alex', color: '#00BFFF', x: 45, y: 35 },
    { id: '2', name: 'Maya', color: '#FF6B6B', x: 60, y: 55 },
  ]);

  const editorRef = useRef<HTMLTextAreaElement>(null);

  // Simulate real-time cursor movement
  useEffect(() => {
    const interval = setInterval(() => {
      setCursors(prev => prev.map(cursor => ({
        ...cursor,
        x: cursor.x + (Math.random() - 0.5) * 2,
        y: cursor.y + (Math.random() - 0.5) * 2,
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const renderCodeWithHighlighting = (code: string) => {
    return code
      .replace(/(function|const|let|var|if|return|console)/g, '<span class="syntax-keyword">$1</span>')
      .replace(/(["'][^"']*["'])/g, '<span class="syntax-string">$1</span>')
      .replace(/(\d+)/g, '<span class="syntax-number">$1</span>')
      .replace(/(\/\/.*)/g, '<span class="syntax-comment">$1</span>');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              DevFlow
            </h1>
            <Badge variant="secondary" className="gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Live Session
            </Badge>
          </div>

          <div className="flex items-center gap-3">
            {/* Collaborators */}
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-muted-foreground" />
              <div className="flex -space-x-2">
                {collaborators.map((collaborator) => (
                  <Avatar key={collaborator.id} className="w-8 h-8 border-2 border-background">
                    <AvatarFallback 
                      className="text-xs font-medium"
                      style={{ backgroundColor: collaborator.color + '20', color: collaborator.color }}
                    >
                      {collaborator.name[0]}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Copy className="w-4 h-4 mr-2" />
                Copy Link
              </Button>
              <Button variant="outline" size="sm">
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Editor */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Code Editor */}
          <Card className="lg:col-span-3 p-0 overflow-hidden relative animate-glow">
            <div className="relative h-full">
              {/* Collaborative Cursors */}
              {cursors.map((cursor) => (
                <div
                  key={cursor.id}
                  className="absolute pointer-events-none z-10 transition-all duration-500"
                  style={{
                    left: `${cursor.x}%`,
                    top: `${cursor.y}%`,
                    color: cursor.color,
                  }}
                >
                  <div className="flex items-center gap-1">
                    <div 
                      className="w-0.5 h-5 animate-pulse"
                      style={{ backgroundColor: cursor.color }}
                    />
                    <Badge 
                      variant="secondary" 
                      className="text-xs px-2 py-0.5 opacity-75"
                      style={{ backgroundColor: cursor.color + '20', color: cursor.color }}
                    >
                      {cursor.name}
                    </Badge>
                  </div>
                </div>
              ))}

              {/* Code Editor */}
              <div className="relative h-full">
                <textarea
                  ref={editorRef}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="absolute inset-0 w-full h-full p-6 bg-transparent text-transparent caret-primary resize-none outline-none code-editor custom-scrollbar z-20"
                  spellCheck={false}
                />
                <div 
                  className="absolute inset-0 p-6 pointer-events-none overflow-auto custom-scrollbar code-editor"
                  dangerouslySetInnerHTML={{ 
                    __html: renderCodeWithHighlighting(code).replace(/\n/g, '<br>') 
                  }}
                />
              </div>

              {/* Run Button */}
              <Button 
                className="absolute bottom-4 right-4 gap-2 shadow-lg"
                size="sm"
              >
                <Play className="w-4 h-4" />
                Run Code
              </Button>
            </div>
          </Card>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Session Info */}
            <Card className="p-4">
              <h3 className="font-semibold mb-3">Session Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Language:</span>
                  <Badge variant="outline">JavaScript</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Created:</span>
                  <span>2 hours ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Last Edit:</span>
                  <span>Just now</span>
                </div>
              </div>
            </Card>

            {/* Collaborators List */}
            <Card className="p-4">
              <h3 className="font-semibold mb-3">Collaborators</h3>
              <div className="space-y-3">
                {collaborators.map((collaborator) => (
                  <div key={collaborator.id} className="flex items-center gap-3">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback 
                        className="text-xs"
                        style={{ backgroundColor: collaborator.color + '20', color: collaborator.color }}
                      >
                        {collaborator.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm flex-1">{collaborator.name}</span>
                    <div className={`w-2 h-2 rounded-full ${collaborator.active ? 'bg-green-500' : 'bg-gray-400'}`} />
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Sessions */}
            <Card className="p-4">
              <h3 className="font-semibold mb-3">Recent Sessions</h3>
              <div className="space-y-2">
                {[
                  { name: 'React Components', time: '1h ago', language: 'JSX' },
                  { name: 'API Integration', time: '3h ago', language: 'JS' },
                  { name: 'Database Query', time: '1d ago', language: 'SQL' },
                ].map((session, idx) => (
                  <div key={idx} className="p-2 rounded-lg border border-border hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="font-medium text-sm">{session.name}</div>
                    <div className="text-xs text-muted-foreground flex justify-between">
                      <span>{session.time}</span>
                      <Badge variant="outline" className="text-xs">{session.language}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevFlowEditor;