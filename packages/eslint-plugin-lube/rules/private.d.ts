import { Node, Pattern } from "estree"

/* eslint-disable no-unused-vars */

interface ASTNode extends Node, Pattern {
	computed: boolean
	key: ASTNode
	left: ASTNode
	local: ASTNode
	name: string
	object: ASTNode
	parent: ASTNode
	property: ASTNode
	range: [number, number]
	right: ASTNode
	shorthand: boolean
	type: string
	value: ASTNode
}