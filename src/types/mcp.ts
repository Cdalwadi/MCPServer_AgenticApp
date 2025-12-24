export interface MCPTool {
  name: string;
  description: string;
  inputSchema: any;
  handler: (input: any) => Promise<any>;
}

export interface MCPRequest {
  id: string | number | null;
  jsonrpc
