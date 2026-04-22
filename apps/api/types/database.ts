export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      analysis_runs: {
        Row: {
          completed_at: string | null
          completion_tokens: number | null
          contract_id: string
          created_at: string
          duration_ms: number | null
          error_message: string | null
          id: string
          model: string
          prompt_tokens: number | null
          status: string
          total_tokens: number | null
          workspace_id: string
        }
        Insert: {
          completed_at?: string | null
          completion_tokens?: number | null
          contract_id: string
          created_at?: string
          duration_ms?: number | null
          error_message?: string | null
          id?: string
          model: string
          prompt_tokens?: number | null
          status?: string
          total_tokens?: number | null
          workspace_id: string
        }
        Update: {
          completed_at?: string | null
          completion_tokens?: number | null
          contract_id?: string
          created_at?: string
          duration_ms?: number | null
          error_message?: string | null
          id?: string
          model?: string
          prompt_tokens?: number | null
          status?: string
          total_tokens?: number | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_runs_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysis_runs_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_messages: {
        Row: {
          content: string
          created_at: string
          id: string
          role: string
          session_id: string
          workspace_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          role: string
          session_id: string
          workspace_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          role?: string
          session_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "chat_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_messages_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_sessions: {
        Row: {
          contract_id: string
          created_at: string
          id: string
          title: string | null
          updated_at: string
          user_id: string
          workspace_id: string
        }
        Insert: {
          contract_id: string
          created_at?: string
          id?: string
          title?: string | null
          updated_at?: string
          user_id: string
          workspace_id: string
        }
        Update: {
          contract_id?: string
          created_at?: string
          id?: string
          title?: string | null
          updated_at?: string
          user_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_sessions_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_sessions_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_submissions: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          message: string
          name: string
          subject: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          subject: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          subject?: string
        }
        Relationships: []
      }
      contract_clauses: {
        Row: {
          category: string
          contract_id: string
          created_at: string
          id: string
          position: number | null
          rationale: string
          raw_text: string
          risk_level: string
          workspace_id: string
        }
        Insert: {
          category: string
          contract_id: string
          created_at?: string
          id?: string
          position?: number | null
          rationale: string
          raw_text: string
          risk_level: string
          workspace_id: string
        }
        Update: {
          category?: string
          contract_id?: string
          created_at?: string
          id?: string
          position?: number | null
          rationale?: string
          raw_text?: string
          risk_level?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "contract_clauses_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contract_clauses_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      contracts: {
        Row: {
          created_at: string
          error_message: string | null
          file_path: string
          file_size: number | null
          id: string
          key_obligations: Json | null
          mime_type: string | null
          name: string
          red_flags: Json | null
          risk_score: number | null
          status: string
          summary: string | null
          updated_at: string
          uploaded_by: string
          workspace_id: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          file_path: string
          file_size?: number | null
          id?: string
          key_obligations?: Json | null
          mime_type?: string | null
          name: string
          red_flags?: Json | null
          risk_score?: number | null
          status?: string
          summary?: string | null
          updated_at?: string
          uploaded_by: string
          workspace_id: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          file_path?: string
          file_size?: number | null
          id?: string
          key_obligations?: Json | null
          mime_type?: string | null
          name?: string
          red_flags?: Json | null
          risk_score?: number | null
          status?: string
          summary?: string | null
          updated_at?: string
          uploaded_by?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "contracts_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletter_subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      rate_limit_log: {
        Row: {
          count: number
          user_id: string
          window: number
        }
        Insert: {
          count?: number
          user_id: string
          window: number
        }
        Update: {
          count?: number
          user_id?: string
          window?: number
        }
        Relationships: []
      }
      workspace_members: {
        Row: {
          created_at: string
          id: string
          role: string
          user_id: string
          workspace_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: string
          user_id: string
          workspace_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: string
          user_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workspace_members_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      workspaces: {
        Row: {
          created_at: string
          id: string
          name: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment_rate_limit: {
        Args: { p_user_id: string; p_window: number; p_limit: number }
        Returns: boolean
      }
      is_workspace_member: {
        Args: { p_workspace_id: string }
        Returns: boolean
      }
      lookup_user_id_by_email: {
        Args: { target_email: string }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
