'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let isMaximized = false;

  const max = vscode.commands.registerCommand(
    'maximizeCurrentFile.maximize',
    () => {
      vscode.commands.executeCommand('workbench.action.maximizeEditor');
      isMaximized = true;

      vscode.ex;
    }
  );

  const reset = vscode.commands.registerCommand(
    'maximizeCurrentFile.reset',
    () => {
      vscode.commands.executeCommand('workbench.action.evenEditorWidths');
      isMaximized = false;

      vscode.ex;
    }
  );

  const toogle = vscode.commands.registerCommand(
    'maximizeCurrentFile.toogle',
    () => {
      isMaximized ? reset() : max();
    }
  );

  context.subscriptions.push(toogle);
  context.subscriptions.push(max);
  context.subscriptions.push(reset);
}

export function deactivate() {}
