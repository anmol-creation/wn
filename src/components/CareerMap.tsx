
import React, { useCallback } from 'react';
import ReactFlow, {
  type Node,
  type Edge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  type Connection,
  addEdge,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import type { AnalysisResult, UserProfile } from '../utils/analyzer';

interface Props {
  profile: UserProfile;
  results: AnalysisResult;
}

const CareerMap: React.FC<Props> = ({ profile, results }) => {
  // 1. Prepare Nodes and Edges
  const initialNodes: Node[] = [];
  const initialEdges: Edge[] = [];

  const { topPathways } = results;
  const inputX = 50;
  const pathwayX = 600;
  let inputY = 50;
  let pathwayY = 50;

  // Helper to check match
  const isMatch = (inputText: string, requiredSkills: string[]) => {
    return requiredSkills.some(req =>
      inputText.toLowerCase().includes(req.toLowerCase()) ||
      req.toLowerCase().includes(inputText.toLowerCase())
    );
  };

  // Create Input Nodes (Left Column)
  const categories = Object.keys(profile) as (keyof UserProfile)[];

  categories.forEach(cat => {
    profile[cat].forEach(item => {
      if (!item.text.trim()) return;

      // Check if this item is actually relevant (connected to any top pathway)
      // If we want to show everything, just add it.
      // To keep it clean, let's show items that have at least one connection OR are high level.
      // For MVP visual map, showing connections is key.

      const relatedPathways = topPathways.filter(p => isMatch(item.text, p.requiredSkills));

      if (relatedPathways.length > 0) {
        const nodeId = `input-${item.id}`;

        initialNodes.push({
          id: nodeId,
          position: { x: inputX, y: inputY },
          data: { label: `${item.text} (${cat})` },
          sourcePosition: 'right' as any,
          style: {
            background: getCategoryColor(cat),
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '12px',
            width: 180
          },
        });

        // Create Edges
        relatedPathways.forEach(pathway => {
           // We only add edges to pathways that are actually in the results (which they are, because we iterate topPathways)
           // But we need to make sure the pathway node exists.
           // We will create pathway nodes in the next block.
           const targetId = `pathway-${pathway.id}`;
           initialEdges.push({
             id: `e-${nodeId}-${targetId}`,
             source: nodeId,
             target: targetId,
             animated: true,
             style: { stroke: '#3b82f6' },
             markerEnd: {
                type: MarkerType.ArrowClosed,
                color: '#3b82f6',
             },
           });
        });

        inputY += 60;
      }
    });
  });

  // Create Pathway Nodes (Right Column)
  // We limit to top 5 to keep the map readable
  topPathways.slice(0, 5).forEach(pathway => {
    const nodeId = `pathway-${pathway.id}`;

    initialNodes.push({
      id: nodeId,
      position: { x: pathwayX, y: pathwayY },
      data: { label: pathway.title },
      targetPosition: 'left' as any,
      style: {
        background: '#fff',
        border: '2px solid #10b981',
        borderRadius: '8px',
        fontWeight: 'bold',
        width: 200,
        padding: '10px'
      },
    });

    pathwayY += 100;
  });

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  if (initialNodes.length === 0) {
      return (
          <div className="h-96 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-gray-500">Not enough data to generate a map. Add more skills or interests!</p>
          </div>
      );
  }

  return (
    <div className="h-[600px] w-full bg-slate-50 rounded-xl border border-slate-200 shadow-inner">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

function getCategoryColor(category: string): string {
  switch (category) {
    case 'Education': return '#3b82f6'; // Blue
    case 'Skills': return '#8b5cf6'; // Purple
    case 'Hobbies': return '#f59e0b'; // Amber
    case 'Interests': return '#10b981'; // Emerald
    case 'Activities': return '#ef4444'; // Red
    case 'Spending': return '#6b7280'; // Gray
    case 'Resources': return '#06b6d4'; // Cyan
    default: return '#9ca3af';
  }
}

export default CareerMap;
