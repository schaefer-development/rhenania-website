export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	/** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
	Date: any;
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
	DateTime: any;
	Hex: any;
	/** Raw JSON value */
	Json: any;
	/** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
	Long: any;
	RGBAHue: any;
	RGBATransparency: any;
	/** Slate-compatible RichText AST */
	RichTextAST: any;
};

export type AccordionContainer = Node & {
	__typename?: 'AccordionContainer';
	accordionItems: Array<AccordionItem>;
	blogPost?: Maybe<BlogPost>;
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Get the document in other stages */
	documentInStages: Array<AccordionContainer>;
	headline?: Maybe<Scalars['String']>;
	/** List of AccordionContainer versions */
	history: Array<Version>;
	/** The unique identifier */
	id: Scalars['ID'];
	paddingBottom?: Maybe<Padding>;
	paddingTop?: Maybe<Padding>;
	page?: Maybe<Page>;
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	scheduledIn: Array<ScheduledOperation>;
	/** System stage field */
	stage: Stage;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

export type AccordionContainerAccordionItemsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<AccordionItemOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<AccordionItemWhereInput>;
};

export type AccordionContainerBlogPostArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type AccordionContainerCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type AccordionContainerDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

export type AccordionContainerHistoryArgs = {
	limit?: Scalars['Int'];
	skip?: Scalars['Int'];
	stageOverride?: InputMaybe<Stage>;
};

export type AccordionContainerPageArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type AccordionContainerPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type AccordionContainerScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type AccordionContainerUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type AccordionContainerConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: AccordionContainerWhereUniqueInput;
};

/** A connection to a list of items. */
export type AccordionContainerConnection = {
	__typename?: 'AccordionContainerConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<AccordionContainerEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type AccordionContainerCreateInput = {
	accordionItems?: InputMaybe<AccordionItemCreateManyInlineInput>;
	blogPost?: InputMaybe<BlogPostCreateOneInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	headline?: InputMaybe<Scalars['String']>;
	paddingBottom?: InputMaybe<Padding>;
	paddingTop?: InputMaybe<Padding>;
	page?: InputMaybe<PageCreateOneInlineInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AccordionContainerCreateManyInlineInput = {
	/** Connect multiple existing AccordionContainer documents */
	connect?: InputMaybe<Array<AccordionContainerWhereUniqueInput>>;
	/** Create and connect multiple existing AccordionContainer documents */
	create?: InputMaybe<Array<AccordionContainerCreateInput>>;
};

export type AccordionContainerCreateOneInlineInput = {
	/** Connect one existing AccordionContainer document */
	connect?: InputMaybe<AccordionContainerWhereUniqueInput>;
	/** Create and connect one AccordionContainer document */
	create?: InputMaybe<AccordionContainerCreateInput>;
};

/** An edge in a connection. */
export type AccordionContainerEdge = {
	__typename?: 'AccordionContainerEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: AccordionContainer;
};

/** Identifies documents */
export type AccordionContainerManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AccordionContainerWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AccordionContainerWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AccordionContainerWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	accordionItems_every?: InputMaybe<AccordionItemWhereInput>;
	accordionItems_none?: InputMaybe<AccordionItemWhereInput>;
	accordionItems_some?: InputMaybe<AccordionItemWhereInput>;
	blogPost?: InputMaybe<BlogPostWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	headline?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	headline_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	headline_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	headline_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	headline_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	headline_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	headline_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	headline_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	headline_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	headline_starts_with?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	paddingBottom?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	paddingBottom_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	paddingBottom_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	paddingBottom_not_in?: InputMaybe<Array<Padding>>;
	paddingTop?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	paddingTop_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	paddingTop_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	paddingTop_not_in?: InputMaybe<Array<Padding>>;
	page?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AccordionContainerOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	HeadlineAsc = 'headline_ASC',
	HeadlineDesc = 'headline_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PaddingBottomAsc = 'paddingBottom_ASC',
	PaddingBottomDesc = 'paddingBottom_DESC',
	PaddingTopAsc = 'paddingTop_ASC',
	PaddingTopDesc = 'paddingTop_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type AccordionContainerUpdateInput = {
	accordionItems?: InputMaybe<AccordionItemUpdateManyInlineInput>;
	blogPost?: InputMaybe<BlogPostUpdateOneInlineInput>;
	headline?: InputMaybe<Scalars['String']>;
	paddingBottom?: InputMaybe<Padding>;
	paddingTop?: InputMaybe<Padding>;
	page?: InputMaybe<PageUpdateOneInlineInput>;
};

export type AccordionContainerUpdateManyInlineInput = {
	/** Connect multiple existing AccordionContainer documents */
	connect?: InputMaybe<Array<AccordionContainerConnectInput>>;
	/** Create and connect multiple AccordionContainer documents */
	create?: InputMaybe<Array<AccordionContainerCreateInput>>;
	/** Delete multiple AccordionContainer documents */
	delete?: InputMaybe<Array<AccordionContainerWhereUniqueInput>>;
	/** Disconnect multiple AccordionContainer documents */
	disconnect?: InputMaybe<Array<AccordionContainerWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing AccordionContainer documents */
	set?: InputMaybe<Array<AccordionContainerWhereUniqueInput>>;
	/** Update multiple AccordionContainer documents */
	update?: InputMaybe<Array<AccordionContainerUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple AccordionContainer documents */
	upsert?: InputMaybe<Array<AccordionContainerUpsertWithNestedWhereUniqueInput>>;
};

export type AccordionContainerUpdateManyInput = {
	headline?: InputMaybe<Scalars['String']>;
	paddingBottom?: InputMaybe<Padding>;
	paddingTop?: InputMaybe<Padding>;
};

export type AccordionContainerUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: AccordionContainerUpdateManyInput;
	/** Document search */
	where: AccordionContainerWhereInput;
};

export type AccordionContainerUpdateOneInlineInput = {
	/** Connect existing AccordionContainer document */
	connect?: InputMaybe<AccordionContainerWhereUniqueInput>;
	/** Create and connect one AccordionContainer document */
	create?: InputMaybe<AccordionContainerCreateInput>;
	/** Delete currently connected AccordionContainer document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected AccordionContainer document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single AccordionContainer document */
	update?: InputMaybe<AccordionContainerUpdateWithNestedWhereUniqueInput>;
	/** Upsert single AccordionContainer document */
	upsert?: InputMaybe<AccordionContainerUpsertWithNestedWhereUniqueInput>;
};

export type AccordionContainerUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: AccordionContainerUpdateInput;
	/** Unique document search */
	where: AccordionContainerWhereUniqueInput;
};

export type AccordionContainerUpsertInput = {
	/** Create document if it didn't exist */
	create: AccordionContainerCreateInput;
	/** Update document if it exists */
	update: AccordionContainerUpdateInput;
};

export type AccordionContainerUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: AccordionContainerUpsertInput;
	/** Unique document search */
	where: AccordionContainerWhereUniqueInput;
};

/** Identifies documents */
export type AccordionContainerWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AccordionContainerWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AccordionContainerWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AccordionContainerWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	accordionItems_every?: InputMaybe<AccordionItemWhereInput>;
	accordionItems_none?: InputMaybe<AccordionItemWhereInput>;
	accordionItems_some?: InputMaybe<AccordionItemWhereInput>;
	blogPost?: InputMaybe<BlogPostWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	headline?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	headline_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	headline_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	headline_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	headline_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	headline_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	headline_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	headline_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	headline_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	headline_starts_with?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	paddingBottom?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	paddingBottom_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	paddingBottom_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	paddingBottom_not_in?: InputMaybe<Array<Padding>>;
	paddingTop?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	paddingTop_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	paddingTop_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	paddingTop_not_in?: InputMaybe<Array<Padding>>;
	page?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References AccordionContainer record uniquely */
export type AccordionContainerWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
};

export type AccordionItem = Node & {
	__typename?: 'AccordionItem';
	accordionContainer?: Maybe<AccordionContainer>;
	content: RichText;
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Get the document in other stages */
	documentInStages: Array<AccordionItem>;
	headline: Scalars['String'];
	/** List of AccordionItem versions */
	history: Array<Version>;
	/** The unique identifier */
	id: Scalars['ID'];
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	scheduledIn: Array<ScheduledOperation>;
	/** System stage field */
	stage: Stage;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

export type AccordionItemAccordionContainerArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type AccordionItemCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type AccordionItemDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

export type AccordionItemHistoryArgs = {
	limit?: Scalars['Int'];
	skip?: Scalars['Int'];
	stageOverride?: InputMaybe<Stage>;
};

export type AccordionItemPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type AccordionItemScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type AccordionItemUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type AccordionItemConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: AccordionItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type AccordionItemConnection = {
	__typename?: 'AccordionItemConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<AccordionItemEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type AccordionItemCreateInput = {
	accordionContainer?: InputMaybe<AccordionContainerCreateOneInlineInput>;
	content: Scalars['RichTextAST'];
	createdAt?: InputMaybe<Scalars['DateTime']>;
	headline: Scalars['String'];
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AccordionItemCreateManyInlineInput = {
	/** Connect multiple existing AccordionItem documents */
	connect?: InputMaybe<Array<AccordionItemWhereUniqueInput>>;
	/** Create and connect multiple existing AccordionItem documents */
	create?: InputMaybe<Array<AccordionItemCreateInput>>;
};

export type AccordionItemCreateOneInlineInput = {
	/** Connect one existing AccordionItem document */
	connect?: InputMaybe<AccordionItemWhereUniqueInput>;
	/** Create and connect one AccordionItem document */
	create?: InputMaybe<AccordionItemCreateInput>;
};

/** An edge in a connection. */
export type AccordionItemEdge = {
	__typename?: 'AccordionItemEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: AccordionItem;
};

/** Identifies documents */
export type AccordionItemManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AccordionItemWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AccordionItemWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AccordionItemWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	accordionContainer?: InputMaybe<AccordionContainerWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	headline?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	headline_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	headline_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	headline_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	headline_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	headline_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	headline_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	headline_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	headline_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	headline_starts_with?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AccordionItemOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	HeadlineAsc = 'headline_ASC',
	HeadlineDesc = 'headline_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type AccordionItemUpdateInput = {
	accordionContainer?: InputMaybe<AccordionContainerUpdateOneInlineInput>;
	content?: InputMaybe<Scalars['RichTextAST']>;
	headline?: InputMaybe<Scalars['String']>;
};

export type AccordionItemUpdateManyInlineInput = {
	/** Connect multiple existing AccordionItem documents */
	connect?: InputMaybe<Array<AccordionItemConnectInput>>;
	/** Create and connect multiple AccordionItem documents */
	create?: InputMaybe<Array<AccordionItemCreateInput>>;
	/** Delete multiple AccordionItem documents */
	delete?: InputMaybe<Array<AccordionItemWhereUniqueInput>>;
	/** Disconnect multiple AccordionItem documents */
	disconnect?: InputMaybe<Array<AccordionItemWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing AccordionItem documents */
	set?: InputMaybe<Array<AccordionItemWhereUniqueInput>>;
	/** Update multiple AccordionItem documents */
	update?: InputMaybe<Array<AccordionItemUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple AccordionItem documents */
	upsert?: InputMaybe<Array<AccordionItemUpsertWithNestedWhereUniqueInput>>;
};

export type AccordionItemUpdateManyInput = {
	content?: InputMaybe<Scalars['RichTextAST']>;
	headline?: InputMaybe<Scalars['String']>;
};

export type AccordionItemUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: AccordionItemUpdateManyInput;
	/** Document search */
	where: AccordionItemWhereInput;
};

export type AccordionItemUpdateOneInlineInput = {
	/** Connect existing AccordionItem document */
	connect?: InputMaybe<AccordionItemWhereUniqueInput>;
	/** Create and connect one AccordionItem document */
	create?: InputMaybe<AccordionItemCreateInput>;
	/** Delete currently connected AccordionItem document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected AccordionItem document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single AccordionItem document */
	update?: InputMaybe<AccordionItemUpdateWithNestedWhereUniqueInput>;
	/** Upsert single AccordionItem document */
	upsert?: InputMaybe<AccordionItemUpsertWithNestedWhereUniqueInput>;
};

export type AccordionItemUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: AccordionItemUpdateInput;
	/** Unique document search */
	where: AccordionItemWhereUniqueInput;
};

export type AccordionItemUpsertInput = {
	/** Create document if it didn't exist */
	create: AccordionItemCreateInput;
	/** Update document if it exists */
	update: AccordionItemUpdateInput;
};

export type AccordionItemUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: AccordionItemUpsertInput;
	/** Unique document search */
	where: AccordionItemWhereUniqueInput;
};

/** Identifies documents */
export type AccordionItemWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AccordionItemWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AccordionItemWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AccordionItemWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	accordionContainer?: InputMaybe<AccordionContainerWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	headline?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	headline_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	headline_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	headline_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	headline_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	headline_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	headline_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	headline_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	headline_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	headline_starts_with?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References AccordionItem record uniquely */
export type AccordionItemWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
};

export type Aggregate = {
	__typename?: 'Aggregate';
	count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
	__typename?: 'Asset';
	assetPickerAssetLink: Array<AssetLink>;
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Get the document in other stages */
	documentInStages: Array<Asset>;
	/** The file name */
	fileName: Scalars['String'];
	/** The file handle */
	handle: Scalars['String'];
	/** The height of the file */
	height?: Maybe<Scalars['Float']>;
	heroBackgroundImageBlogPost: Array<BlogPost>;
	/** List of Asset versions */
	history: Array<Version>;
	iconCardIcon: Array<CardIcon>;
	iconHeroImage: Array<HeroImage>;
	/** The unique identifier */
	id: Scalars['ID'];
	imageCardImage: Array<CardImage>;
	imageEyecatcher: Array<Eyecatcher>;
	imageHeroImage: Array<HeroImage>;
	imageImage: Array<Image>;
	/** System Locale field */
	locale: Locale;
	/** Get the other localizations for this document */
	localizations: Array<Asset>;
	/** The mime type of the file */
	mimeType?: Maybe<Scalars['String']>;
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	referenceLogoReferencesItem: Array<ReferencesItem>;
	scheduledIn: Array<ScheduledOperation>;
	/** The file size */
	size?: Maybe<Scalars['Float']>;
	/** System stage field */
	stage: Stage;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
	/** Get the url for the asset with provided transformations applied. */
	url: Scalars['String'];
	/** The file width */
	width?: Maybe<Scalars['Float']>;
};

/** Asset system model */
export type AssetAssetPickerAssetLinkArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<AssetLinkOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<AssetLinkWhereInput>;
};

/** Asset system model */
export type AssetCreatedAtArgs = {
	variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

/** Asset system model */
export type AssetHeroBackgroundImageBlogPostArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<BlogPostOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<BlogPostWhereInput>;
};

/** Asset system model */
export type AssetHistoryArgs = {
	limit?: Scalars['Int'];
	skip?: Scalars['Int'];
	stageOverride?: InputMaybe<Stage>;
};

/** Asset system model */
export type AssetIconCardIconArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<CardIconOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<CardIconWhereInput>;
};

/** Asset system model */
export type AssetIconHeroImageArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<HeroImageOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<HeroImageWhereInput>;
};

/** Asset system model */
export type AssetImageCardImageArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<CardImageOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<CardImageWhereInput>;
};

/** Asset system model */
export type AssetImageEyecatcherArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<EyecatcherOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<EyecatcherWhereInput>;
};

/** Asset system model */
export type AssetImageHeroImageArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<HeroImageOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<HeroImageWhereInput>;
};

/** Asset system model */
export type AssetImageImageArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<ImageOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ImageWhereInput>;
};

/** Asset system model */
export type AssetLocalizationsArgs = {
	includeCurrent?: Scalars['Boolean'];
	locales?: Array<Locale>;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
	variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetReferenceLogoReferencesItemArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<ReferencesItemOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ReferencesItemWhereInput>;
};

/** Asset system model */
export type AssetScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
	variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUrlArgs = {
	transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
	__typename?: 'AssetConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<AssetEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type AssetCreateInput = {
	assetPickerAssetLink?: InputMaybe<AssetLinkCreateManyInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	fileName: Scalars['String'];
	handle: Scalars['String'];
	height?: InputMaybe<Scalars['Float']>;
	heroBackgroundImageBlogPost?: InputMaybe<BlogPostCreateManyInlineInput>;
	iconCardIcon?: InputMaybe<CardIconCreateManyInlineInput>;
	iconHeroImage?: InputMaybe<HeroImageCreateManyInlineInput>;
	imageCardImage?: InputMaybe<CardImageCreateManyInlineInput>;
	imageEyecatcher?: InputMaybe<EyecatcherCreateManyInlineInput>;
	imageHeroImage?: InputMaybe<HeroImageCreateManyInlineInput>;
	imageImage?: InputMaybe<ImageCreateManyInlineInput>;
	/** Inline mutations for managing document localizations excluding the default locale */
	localizations?: InputMaybe<AssetCreateLocalizationsInput>;
	mimeType?: InputMaybe<Scalars['String']>;
	referenceLogoReferencesItem?: InputMaybe<ReferencesItemCreateManyInlineInput>;
	size?: InputMaybe<Scalars['Float']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
	createdAt?: InputMaybe<Scalars['DateTime']>;
	fileName: Scalars['String'];
	handle: Scalars['String'];
	height?: InputMaybe<Scalars['Float']>;
	mimeType?: InputMaybe<Scalars['String']>;
	size?: InputMaybe<Scalars['Float']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
	/** Localization input */
	data: AssetCreateLocalizationDataInput;
	locale: Locale;
};

export type AssetCreateLocalizationsInput = {
	/** Create localizations for the newly-created document */
	create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
	/** Connect multiple existing Asset documents */
	connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
	/** Create and connect multiple existing Asset documents */
	create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
	/** Connect one existing Asset document */
	connect?: InputMaybe<AssetWhereUniqueInput>;
	/** Create and connect one Asset document */
	create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
	__typename?: 'AssetEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: Asset;
};

export type AssetLink = Node & {
	__typename?: 'AssetLink';
	assetPicker?: Maybe<Asset>;
	blogPost?: Maybe<BlogPost>;
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Get the document in other stages */
	documentInStages: Array<AssetLink>;
	downloadlinkLabel?: Maybe<Scalars['String']>;
	headline?: Maybe<Scalars['String']>;
	/** List of AssetLink versions */
	history: Array<Version>;
	/** The unique identifier */
	id: Scalars['ID'];
	page?: Maybe<Page>;
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	scheduledIn: Array<ScheduledOperation>;
	/** System stage field */
	stage: Stage;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

export type AssetLinkAssetPickerArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type AssetLinkBlogPostArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type AssetLinkCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type AssetLinkDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

export type AssetLinkHistoryArgs = {
	limit?: Scalars['Int'];
	skip?: Scalars['Int'];
	stageOverride?: InputMaybe<Stage>;
};

export type AssetLinkPageArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type AssetLinkPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type AssetLinkScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type AssetLinkUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type AssetLinkConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: AssetLinkWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetLinkConnection = {
	__typename?: 'AssetLinkConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<AssetLinkEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type AssetLinkCreateInput = {
	assetPicker?: InputMaybe<AssetCreateOneInlineInput>;
	blogPost?: InputMaybe<BlogPostCreateOneInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	downloadlinkLabel?: InputMaybe<Scalars['String']>;
	headline?: InputMaybe<Scalars['String']>;
	page?: InputMaybe<PageCreateOneInlineInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AssetLinkCreateManyInlineInput = {
	/** Connect multiple existing AssetLink documents */
	connect?: InputMaybe<Array<AssetLinkWhereUniqueInput>>;
	/** Create and connect multiple existing AssetLink documents */
	create?: InputMaybe<Array<AssetLinkCreateInput>>;
};

export type AssetLinkCreateOneInlineInput = {
	/** Connect one existing AssetLink document */
	connect?: InputMaybe<AssetLinkWhereUniqueInput>;
	/** Create and connect one AssetLink document */
	create?: InputMaybe<AssetLinkCreateInput>;
};

/** An edge in a connection. */
export type AssetLinkEdge = {
	__typename?: 'AssetLinkEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: AssetLink;
};

/** Identifies documents */
export type AssetLinkManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AssetLinkWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AssetLinkWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AssetLinkWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	assetPicker?: InputMaybe<AssetWhereInput>;
	blogPost?: InputMaybe<BlogPostWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	downloadlinkLabel?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	downloadlinkLabel_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	downloadlinkLabel_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	downloadlinkLabel_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	downloadlinkLabel_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	downloadlinkLabel_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	downloadlinkLabel_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	downloadlinkLabel_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	downloadlinkLabel_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	downloadlinkLabel_starts_with?: InputMaybe<Scalars['String']>;
	headline?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	headline_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	headline_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	headline_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	headline_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	headline_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	headline_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	headline_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	headline_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	headline_starts_with?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	page?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetLinkOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	DownloadlinkLabelAsc = 'downloadlinkLabel_ASC',
	DownloadlinkLabelDesc = 'downloadlinkLabel_DESC',
	HeadlineAsc = 'headline_ASC',
	HeadlineDesc = 'headline_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type AssetLinkUpdateInput = {
	assetPicker?: InputMaybe<AssetUpdateOneInlineInput>;
	blogPost?: InputMaybe<BlogPostUpdateOneInlineInput>;
	downloadlinkLabel?: InputMaybe<Scalars['String']>;
	headline?: InputMaybe<Scalars['String']>;
	page?: InputMaybe<PageUpdateOneInlineInput>;
};

export type AssetLinkUpdateManyInlineInput = {
	/** Connect multiple existing AssetLink documents */
	connect?: InputMaybe<Array<AssetLinkConnectInput>>;
	/** Create and connect multiple AssetLink documents */
	create?: InputMaybe<Array<AssetLinkCreateInput>>;
	/** Delete multiple AssetLink documents */
	delete?: InputMaybe<Array<AssetLinkWhereUniqueInput>>;
	/** Disconnect multiple AssetLink documents */
	disconnect?: InputMaybe<Array<AssetLinkWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing AssetLink documents */
	set?: InputMaybe<Array<AssetLinkWhereUniqueInput>>;
	/** Update multiple AssetLink documents */
	update?: InputMaybe<Array<AssetLinkUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple AssetLink documents */
	upsert?: InputMaybe<Array<AssetLinkUpsertWithNestedWhereUniqueInput>>;
};

export type AssetLinkUpdateManyInput = {
	downloadlinkLabel?: InputMaybe<Scalars['String']>;
	headline?: InputMaybe<Scalars['String']>;
};

export type AssetLinkUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: AssetLinkUpdateManyInput;
	/** Document search */
	where: AssetLinkWhereInput;
};

export type AssetLinkUpdateOneInlineInput = {
	/** Connect existing AssetLink document */
	connect?: InputMaybe<AssetLinkWhereUniqueInput>;
	/** Create and connect one AssetLink document */
	create?: InputMaybe<AssetLinkCreateInput>;
	/** Delete currently connected AssetLink document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected AssetLink document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single AssetLink document */
	update?: InputMaybe<AssetLinkUpdateWithNestedWhereUniqueInput>;
	/** Upsert single AssetLink document */
	upsert?: InputMaybe<AssetLinkUpsertWithNestedWhereUniqueInput>;
};

export type AssetLinkUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: AssetLinkUpdateInput;
	/** Unique document search */
	where: AssetLinkWhereUniqueInput;
};

export type AssetLinkUpsertInput = {
	/** Create document if it didn't exist */
	create: AssetLinkCreateInput;
	/** Update document if it exists */
	update: AssetLinkUpdateInput;
};

export type AssetLinkUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: AssetLinkUpsertInput;
	/** Unique document search */
	where: AssetLinkWhereUniqueInput;
};

/** Identifies documents */
export type AssetLinkWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AssetLinkWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AssetLinkWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AssetLinkWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	assetPicker?: InputMaybe<AssetWhereInput>;
	blogPost?: InputMaybe<BlogPostWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	downloadlinkLabel?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	downloadlinkLabel_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	downloadlinkLabel_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	downloadlinkLabel_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	downloadlinkLabel_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	downloadlinkLabel_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	downloadlinkLabel_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	downloadlinkLabel_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	downloadlinkLabel_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	downloadlinkLabel_starts_with?: InputMaybe<Scalars['String']>;
	headline?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	headline_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	headline_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	headline_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	headline_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	headline_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	headline_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	headline_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	headline_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	headline_starts_with?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	page?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References AssetLink record uniquely */
export type AssetLinkWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
};

/** Identifies documents */
export type AssetManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AssetWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AssetWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AssetWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	assetPickerAssetLink_every?: InputMaybe<AssetLinkWhereInput>;
	assetPickerAssetLink_none?: InputMaybe<AssetLinkWhereInput>;
	assetPickerAssetLink_some?: InputMaybe<AssetLinkWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	heroBackgroundImageBlogPost_every?: InputMaybe<BlogPostWhereInput>;
	heroBackgroundImageBlogPost_none?: InputMaybe<BlogPostWhereInput>;
	heroBackgroundImageBlogPost_some?: InputMaybe<BlogPostWhereInput>;
	iconCardIcon_every?: InputMaybe<CardIconWhereInput>;
	iconCardIcon_none?: InputMaybe<CardIconWhereInput>;
	iconCardIcon_some?: InputMaybe<CardIconWhereInput>;
	iconHeroImage_every?: InputMaybe<HeroImageWhereInput>;
	iconHeroImage_none?: InputMaybe<HeroImageWhereInput>;
	iconHeroImage_some?: InputMaybe<HeroImageWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	imageCardImage_every?: InputMaybe<CardImageWhereInput>;
	imageCardImage_none?: InputMaybe<CardImageWhereInput>;
	imageCardImage_some?: InputMaybe<CardImageWhereInput>;
	imageEyecatcher_every?: InputMaybe<EyecatcherWhereInput>;
	imageEyecatcher_none?: InputMaybe<EyecatcherWhereInput>;
	imageEyecatcher_some?: InputMaybe<EyecatcherWhereInput>;
	imageHeroImage_every?: InputMaybe<HeroImageWhereInput>;
	imageHeroImage_none?: InputMaybe<HeroImageWhereInput>;
	imageHeroImage_some?: InputMaybe<HeroImageWhereInput>;
	imageImage_every?: InputMaybe<ImageWhereInput>;
	imageImage_none?: InputMaybe<ImageWhereInput>;
	imageImage_some?: InputMaybe<ImageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	referenceLogoReferencesItem_every?: InputMaybe<ReferencesItemWhereInput>;
	referenceLogoReferencesItem_none?: InputMaybe<ReferencesItemWhereInput>;
	referenceLogoReferencesItem_some?: InputMaybe<ReferencesItemWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	FileNameAsc = 'fileName_ASC',
	FileNameDesc = 'fileName_DESC',
	HandleAsc = 'handle_ASC',
	HandleDesc = 'handle_DESC',
	HeightAsc = 'height_ASC',
	HeightDesc = 'height_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	MimeTypeAsc = 'mimeType_ASC',
	MimeTypeDesc = 'mimeType_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	SizeAsc = 'size_ASC',
	SizeDesc = 'size_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC',
	WidthAsc = 'width_ASC',
	WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
	document?: InputMaybe<DocumentTransformationInput>;
	image?: InputMaybe<ImageTransformationInput>;
	/** Pass true if you want to validate the passed transformation parameters */
	validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
	assetPickerAssetLink?: InputMaybe<AssetLinkUpdateManyInlineInput>;
	fileName?: InputMaybe<Scalars['String']>;
	handle?: InputMaybe<Scalars['String']>;
	height?: InputMaybe<Scalars['Float']>;
	heroBackgroundImageBlogPost?: InputMaybe<BlogPostUpdateManyInlineInput>;
	iconCardIcon?: InputMaybe<CardIconUpdateManyInlineInput>;
	iconHeroImage?: InputMaybe<HeroImageUpdateManyInlineInput>;
	imageCardImage?: InputMaybe<CardImageUpdateManyInlineInput>;
	imageEyecatcher?: InputMaybe<EyecatcherUpdateManyInlineInput>;
	imageHeroImage?: InputMaybe<HeroImageUpdateManyInlineInput>;
	imageImage?: InputMaybe<ImageUpdateManyInlineInput>;
	/** Manage document localizations */
	localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
	mimeType?: InputMaybe<Scalars['String']>;
	referenceLogoReferencesItem?: InputMaybe<ReferencesItemUpdateManyInlineInput>;
	size?: InputMaybe<Scalars['Float']>;
	width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
	fileName?: InputMaybe<Scalars['String']>;
	handle?: InputMaybe<Scalars['String']>;
	height?: InputMaybe<Scalars['Float']>;
	mimeType?: InputMaybe<Scalars['String']>;
	size?: InputMaybe<Scalars['Float']>;
	width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
	data: AssetUpdateLocalizationDataInput;
	locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
	/** Localizations to create */
	create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
	/** Localizations to delete */
	delete?: InputMaybe<Array<Locale>>;
	/** Localizations to update */
	update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
	upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
	/** Connect multiple existing Asset documents */
	connect?: InputMaybe<Array<AssetConnectInput>>;
	/** Create and connect multiple Asset documents */
	create?: InputMaybe<Array<AssetCreateInput>>;
	/** Delete multiple Asset documents */
	delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
	/** Disconnect multiple Asset documents */
	disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Asset documents */
	set?: InputMaybe<Array<AssetWhereUniqueInput>>;
	/** Update multiple Asset documents */
	update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Asset documents */
	upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
	fileName?: InputMaybe<Scalars['String']>;
	height?: InputMaybe<Scalars['Float']>;
	/** Optional updates to localizations */
	localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
	mimeType?: InputMaybe<Scalars['String']>;
	size?: InputMaybe<Scalars['Float']>;
	width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
	fileName?: InputMaybe<Scalars['String']>;
	height?: InputMaybe<Scalars['Float']>;
	mimeType?: InputMaybe<Scalars['String']>;
	size?: InputMaybe<Scalars['Float']>;
	width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
	data: AssetUpdateManyLocalizationDataInput;
	locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
	/** Localizations to update */
	update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: AssetUpdateManyInput;
	/** Document search */
	where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
	/** Connect existing Asset document */
	connect?: InputMaybe<AssetWhereUniqueInput>;
	/** Create and connect one Asset document */
	create?: InputMaybe<AssetCreateInput>;
	/** Delete currently connected Asset document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected Asset document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single Asset document */
	update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Asset document */
	upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: AssetUpdateInput;
	/** Unique document search */
	where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
	/** Create document if it didn't exist */
	create: AssetCreateInput;
	/** Update document if it exists */
	update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
	create: AssetCreateLocalizationDataInput;
	locale: Locale;
	update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: AssetUpsertInput;
	/** Unique document search */
	where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<AssetWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<AssetWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<AssetWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	assetPickerAssetLink_every?: InputMaybe<AssetLinkWhereInput>;
	assetPickerAssetLink_none?: InputMaybe<AssetLinkWhereInput>;
	assetPickerAssetLink_some?: InputMaybe<AssetLinkWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	fileName?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	fileName_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	fileName_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	fileName_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	fileName_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	fileName_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	fileName_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	fileName_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	fileName_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	fileName_starts_with?: InputMaybe<Scalars['String']>;
	handle?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	handle_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	handle_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	handle_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	handle_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	handle_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	handle_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	handle_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	handle_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	handle_starts_with?: InputMaybe<Scalars['String']>;
	height?: InputMaybe<Scalars['Float']>;
	/** All values greater than the given value. */
	height_gt?: InputMaybe<Scalars['Float']>;
	/** All values greater than or equal the given value. */
	height_gte?: InputMaybe<Scalars['Float']>;
	/** All values that are contained in given list. */
	height_in?: InputMaybe<Array<Scalars['Float']>>;
	/** All values less than the given value. */
	height_lt?: InputMaybe<Scalars['Float']>;
	/** All values less than or equal the given value. */
	height_lte?: InputMaybe<Scalars['Float']>;
	/** All values that are not equal to given value. */
	height_not?: InputMaybe<Scalars['Float']>;
	/** All values that are not contained in given list. */
	height_not_in?: InputMaybe<Array<Scalars['Float']>>;
	heroBackgroundImageBlogPost_every?: InputMaybe<BlogPostWhereInput>;
	heroBackgroundImageBlogPost_none?: InputMaybe<BlogPostWhereInput>;
	heroBackgroundImageBlogPost_some?: InputMaybe<BlogPostWhereInput>;
	iconCardIcon_every?: InputMaybe<CardIconWhereInput>;
	iconCardIcon_none?: InputMaybe<CardIconWhereInput>;
	iconCardIcon_some?: InputMaybe<CardIconWhereInput>;
	iconHeroImage_every?: InputMaybe<HeroImageWhereInput>;
	iconHeroImage_none?: InputMaybe<HeroImageWhereInput>;
	iconHeroImage_some?: InputMaybe<HeroImageWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	imageCardImage_every?: InputMaybe<CardImageWhereInput>;
	imageCardImage_none?: InputMaybe<CardImageWhereInput>;
	imageCardImage_some?: InputMaybe<CardImageWhereInput>;
	imageEyecatcher_every?: InputMaybe<EyecatcherWhereInput>;
	imageEyecatcher_none?: InputMaybe<EyecatcherWhereInput>;
	imageEyecatcher_some?: InputMaybe<EyecatcherWhereInput>;
	imageHeroImage_every?: InputMaybe<HeroImageWhereInput>;
	imageHeroImage_none?: InputMaybe<HeroImageWhereInput>;
	imageHeroImage_some?: InputMaybe<HeroImageWhereInput>;
	imageImage_every?: InputMaybe<ImageWhereInput>;
	imageImage_none?: InputMaybe<ImageWhereInput>;
	imageImage_some?: InputMaybe<ImageWhereInput>;
	mimeType?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	mimeType_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	mimeType_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	mimeType_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	mimeType_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	mimeType_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	mimeType_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	mimeType_starts_with?: InputMaybe<Scalars['String']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	referenceLogoReferencesItem_every?: InputMaybe<ReferencesItemWhereInput>;
	referenceLogoReferencesItem_none?: InputMaybe<ReferencesItemWhereInput>;
	referenceLogoReferencesItem_some?: InputMaybe<ReferencesItemWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	size?: InputMaybe<Scalars['Float']>;
	/** All values greater than the given value. */
	size_gt?: InputMaybe<Scalars['Float']>;
	/** All values greater than or equal the given value. */
	size_gte?: InputMaybe<Scalars['Float']>;
	/** All values that are contained in given list. */
	size_in?: InputMaybe<Array<Scalars['Float']>>;
	/** All values less than the given value. */
	size_lt?: InputMaybe<Scalars['Float']>;
	/** All values less than or equal the given value. */
	size_lte?: InputMaybe<Scalars['Float']>;
	/** All values that are not equal to given value. */
	size_not?: InputMaybe<Scalars['Float']>;
	/** All values that are not contained in given list. */
	size_not_in?: InputMaybe<Array<Scalars['Float']>>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
	width?: InputMaybe<Scalars['Float']>;
	/** All values greater than the given value. */
	width_gt?: InputMaybe<Scalars['Float']>;
	/** All values greater than or equal the given value. */
	width_gte?: InputMaybe<Scalars['Float']>;
	/** All values that are contained in given list. */
	width_in?: InputMaybe<Array<Scalars['Float']>>;
	/** All values less than the given value. */
	width_lt?: InputMaybe<Scalars['Float']>;
	/** All values less than or equal the given value. */
	width_lte?: InputMaybe<Scalars['Float']>;
	/** All values that are not equal to given value. */
	width_not?: InputMaybe<Scalars['Float']>;
	/** All values that are not contained in given list. */
	width_not_in?: InputMaybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
	__typename?: 'BatchPayload';
	/** The number of nodes that have been affected by the Batch operation. */
	count: Scalars['Long'];
};

export type BlogPost = Node & {
	__typename?: 'BlogPost';
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Get the document in other stages */
	documentInStages: Array<BlogPost>;
	heroBackgroundImage?: Maybe<Asset>;
	/** List of BlogPost versions */
	history: Array<Version>;
	/** The unique identifier */
	id: Scalars['ID'];
	modules: Array<BlogPostModules>;
	page?: Maybe<Page>;
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	scheduledIn: Array<ScheduledOperation>;
	slug: Scalars['String'];
	source?: Maybe<Link>;
	/** System stage field */
	stage: Stage;
	teaserHeadline?: Maybe<Scalars['String']>;
	teaserSubheadline?: Maybe<Scalars['String']>;
	teaserText?: Maybe<Scalars['String']>;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

export type BlogPostCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type BlogPostDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

export type BlogPostHeroBackgroundImageArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type BlogPostHistoryArgs = {
	limit?: Scalars['Int'];
	skip?: Scalars['Int'];
	stageOverride?: InputMaybe<Stage>;
};

export type BlogPostModulesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
};

export type BlogPostPageArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type BlogPostPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type BlogPostScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type BlogPostSourceArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type BlogPostUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type BlogPostConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: BlogPostWhereUniqueInput;
};

/** A connection to a list of items. */
export type BlogPostConnection = {
	__typename?: 'BlogPostConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<BlogPostEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type BlogPostCreateInput = {
	createdAt?: InputMaybe<Scalars['DateTime']>;
	heroBackgroundImage?: InputMaybe<AssetCreateOneInlineInput>;
	modules?: InputMaybe<BlogPostModulesCreateManyInlineInput>;
	page?: InputMaybe<PageCreateOneInlineInput>;
	slug: Scalars['String'];
	source?: InputMaybe<LinkCreateOneInlineInput>;
	teaserHeadline?: InputMaybe<Scalars['String']>;
	teaserSubheadline?: InputMaybe<Scalars['String']>;
	teaserText?: InputMaybe<Scalars['String']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BlogPostCreateManyInlineInput = {
	/** Connect multiple existing BlogPost documents */
	connect?: InputMaybe<Array<BlogPostWhereUniqueInput>>;
	/** Create and connect multiple existing BlogPost documents */
	create?: InputMaybe<Array<BlogPostCreateInput>>;
};

export type BlogPostCreateOneInlineInput = {
	/** Connect one existing BlogPost document */
	connect?: InputMaybe<BlogPostWhereUniqueInput>;
	/** Create and connect one BlogPost document */
	create?: InputMaybe<BlogPostCreateInput>;
};

/** An edge in a connection. */
export type BlogPostEdge = {
	__typename?: 'BlogPostEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: BlogPost;
};

/** Identifies documents */
export type BlogPostManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<BlogPostWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<BlogPostWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<BlogPostWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	heroBackgroundImage?: InputMaybe<AssetWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	page?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	slug?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	slug_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	slug_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	slug_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	slug_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	slug_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	slug_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	slug_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	slug_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	slug_starts_with?: InputMaybe<Scalars['String']>;
	source?: InputMaybe<LinkWhereInput>;
	teaserHeadline?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	teaserHeadline_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	teaserHeadline_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	teaserHeadline_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	teaserHeadline_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	teaserHeadline_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	teaserHeadline_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	teaserHeadline_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	teaserHeadline_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	teaserHeadline_starts_with?: InputMaybe<Scalars['String']>;
	teaserSubheadline?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	teaserSubheadline_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	teaserSubheadline_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	teaserSubheadline_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	teaserSubheadline_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	teaserSubheadline_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	teaserSubheadline_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	teaserSubheadline_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	teaserSubheadline_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	teaserSubheadline_starts_with?: InputMaybe<Scalars['String']>;
	teaserText?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	teaserText_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	teaserText_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	teaserText_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	teaserText_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	teaserText_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	teaserText_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	teaserText_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	teaserText_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	teaserText_starts_with?: InputMaybe<Scalars['String']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export type BlogPostModules =
	| AccordionContainer
	| AssetLink
	| CardsContainer
	| CtaLink
	| Divider
	| Image
	| Text;

export type BlogPostModulesConnectInput = {
	AccordionContainer?: InputMaybe<AccordionContainerConnectInput>;
	AssetLink?: InputMaybe<AssetLinkConnectInput>;
	CardsContainer?: InputMaybe<CardsContainerConnectInput>;
	CtaLink?: InputMaybe<CtaLinkConnectInput>;
	Divider?: InputMaybe<DividerConnectInput>;
	Image?: InputMaybe<ImageConnectInput>;
	Text?: InputMaybe<TextConnectInput>;
};

export type BlogPostModulesCreateInput = {
	AccordionContainer?: InputMaybe<AccordionContainerCreateInput>;
	AssetLink?: InputMaybe<AssetLinkCreateInput>;
	CardsContainer?: InputMaybe<CardsContainerCreateInput>;
	CtaLink?: InputMaybe<CtaLinkCreateInput>;
	Divider?: InputMaybe<DividerCreateInput>;
	Image?: InputMaybe<ImageCreateInput>;
	Text?: InputMaybe<TextCreateInput>;
};

export type BlogPostModulesCreateManyInlineInput = {
	/** Connect multiple existing BlogPostModules documents */
	connect?: InputMaybe<Array<BlogPostModulesWhereUniqueInput>>;
	/** Create and connect multiple existing BlogPostModules documents */
	create?: InputMaybe<Array<BlogPostModulesCreateInput>>;
};

export type BlogPostModulesCreateOneInlineInput = {
	/** Connect one existing BlogPostModules document */
	connect?: InputMaybe<BlogPostModulesWhereUniqueInput>;
	/** Create and connect one BlogPostModules document */
	create?: InputMaybe<BlogPostModulesCreateInput>;
};

export type BlogPostModulesUpdateInput = {
	AccordionContainer?: InputMaybe<AccordionContainerUpdateInput>;
	AssetLink?: InputMaybe<AssetLinkUpdateInput>;
	CardsContainer?: InputMaybe<CardsContainerUpdateInput>;
	CtaLink?: InputMaybe<CtaLinkUpdateInput>;
	Divider?: InputMaybe<DividerUpdateInput>;
	Image?: InputMaybe<ImageUpdateInput>;
	Text?: InputMaybe<TextUpdateInput>;
};

export type BlogPostModulesUpdateManyInlineInput = {
	/** Connect multiple existing BlogPostModules documents */
	connect?: InputMaybe<Array<BlogPostModulesConnectInput>>;
	/** Create and connect multiple BlogPostModules documents */
	create?: InputMaybe<Array<BlogPostModulesCreateInput>>;
	/** Delete multiple BlogPostModules documents */
	delete?: InputMaybe<Array<BlogPostModulesWhereUniqueInput>>;
	/** Disconnect multiple BlogPostModules documents */
	disconnect?: InputMaybe<Array<BlogPostModulesWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing BlogPostModules documents */
	set?: InputMaybe<Array<BlogPostModulesWhereUniqueInput>>;
	/** Update multiple BlogPostModules documents */
	update?: InputMaybe<Array<BlogPostModulesUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple BlogPostModules documents */
	upsert?: InputMaybe<Array<BlogPostModulesUpsertWithNestedWhereUniqueInput>>;
};

export type BlogPostModulesUpdateManyWithNestedWhereInput = {
	AccordionContainer?: InputMaybe<AccordionContainerUpdateManyWithNestedWhereInput>;
	AssetLink?: InputMaybe<AssetLinkUpdateManyWithNestedWhereInput>;
	CardsContainer?: InputMaybe<CardsContainerUpdateManyWithNestedWhereInput>;
	CtaLink?: InputMaybe<CtaLinkUpdateManyWithNestedWhereInput>;
	Divider?: InputMaybe<DividerUpdateManyWithNestedWhereInput>;
	Image?: InputMaybe<ImageUpdateManyWithNestedWhereInput>;
	Text?: InputMaybe<TextUpdateManyWithNestedWhereInput>;
};

export type BlogPostModulesUpdateOneInlineInput = {
	/** Connect existing BlogPostModules document */
	connect?: InputMaybe<BlogPostModulesWhereUniqueInput>;
	/** Create and connect one BlogPostModules document */
	create?: InputMaybe<BlogPostModulesCreateInput>;
	/** Delete currently connected BlogPostModules document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected BlogPostModules document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single BlogPostModules document */
	update?: InputMaybe<BlogPostModulesUpdateWithNestedWhereUniqueInput>;
	/** Upsert single BlogPostModules document */
	upsert?: InputMaybe<BlogPostModulesUpsertWithNestedWhereUniqueInput>;
};

export type BlogPostModulesUpdateWithNestedWhereUniqueInput = {
	AccordionContainer?: InputMaybe<AccordionContainerUpdateWithNestedWhereUniqueInput>;
	AssetLink?: InputMaybe<AssetLinkUpdateWithNestedWhereUniqueInput>;
	CardsContainer?: InputMaybe<CardsContainerUpdateWithNestedWhereUniqueInput>;
	CtaLink?: InputMaybe<CtaLinkUpdateWithNestedWhereUniqueInput>;
	Divider?: InputMaybe<DividerUpdateWithNestedWhereUniqueInput>;
	Image?: InputMaybe<ImageUpdateWithNestedWhereUniqueInput>;
	Text?: InputMaybe<TextUpdateWithNestedWhereUniqueInput>;
};

export type BlogPostModulesUpsertWithNestedWhereUniqueInput = {
	AccordionContainer?: InputMaybe<AccordionContainerUpsertWithNestedWhereUniqueInput>;
	AssetLink?: InputMaybe<AssetLinkUpsertWithNestedWhereUniqueInput>;
	CardsContainer?: InputMaybe<CardsContainerUpsertWithNestedWhereUniqueInput>;
	CtaLink?: InputMaybe<CtaLinkUpsertWithNestedWhereUniqueInput>;
	Divider?: InputMaybe<DividerUpsertWithNestedWhereUniqueInput>;
	Image?: InputMaybe<ImageUpsertWithNestedWhereUniqueInput>;
	Text?: InputMaybe<TextUpsertWithNestedWhereUniqueInput>;
};

export type BlogPostModulesWhereInput = {
	AccordionContainer?: InputMaybe<AccordionContainerWhereInput>;
	AssetLink?: InputMaybe<AssetLinkWhereInput>;
	CardsContainer?: InputMaybe<CardsContainerWhereInput>;
	CtaLink?: InputMaybe<CtaLinkWhereInput>;
	Divider?: InputMaybe<DividerWhereInput>;
	Image?: InputMaybe<ImageWhereInput>;
	Text?: InputMaybe<TextWhereInput>;
};

export type BlogPostModulesWhereUniqueInput = {
	AccordionContainer?: InputMaybe<AccordionContainerWhereUniqueInput>;
	AssetLink?: InputMaybe<AssetLinkWhereUniqueInput>;
	CardsContainer?: InputMaybe<CardsContainerWhereUniqueInput>;
	CtaLink?: InputMaybe<CtaLinkWhereUniqueInput>;
	Divider?: InputMaybe<DividerWhereUniqueInput>;
	Image?: InputMaybe<ImageWhereUniqueInput>;
	Text?: InputMaybe<TextWhereUniqueInput>;
};

export enum BlogPostOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	SlugAsc = 'slug_ASC',
	SlugDesc = 'slug_DESC',
	TeaserHeadlineAsc = 'teaserHeadline_ASC',
	TeaserHeadlineDesc = 'teaserHeadline_DESC',
	TeaserSubheadlineAsc = 'teaserSubheadline_ASC',
	TeaserSubheadlineDesc = 'teaserSubheadline_DESC',
	TeaserTextAsc = 'teaserText_ASC',
	TeaserTextDesc = 'teaserText_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type BlogPostUpdateInput = {
	heroBackgroundImage?: InputMaybe<AssetUpdateOneInlineInput>;
	modules?: InputMaybe<BlogPostModulesUpdateManyInlineInput>;
	page?: InputMaybe<PageUpdateOneInlineInput>;
	slug?: InputMaybe<Scalars['String']>;
	source?: InputMaybe<LinkUpdateOneInlineInput>;
	teaserHeadline?: InputMaybe<Scalars['String']>;
	teaserSubheadline?: InputMaybe<Scalars['String']>;
	teaserText?: InputMaybe<Scalars['String']>;
};

export type BlogPostUpdateManyInlineInput = {
	/** Connect multiple existing BlogPost documents */
	connect?: InputMaybe<Array<BlogPostConnectInput>>;
	/** Create and connect multiple BlogPost documents */
	create?: InputMaybe<Array<BlogPostCreateInput>>;
	/** Delete multiple BlogPost documents */
	delete?: InputMaybe<Array<BlogPostWhereUniqueInput>>;
	/** Disconnect multiple BlogPost documents */
	disconnect?: InputMaybe<Array<BlogPostWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing BlogPost documents */
	set?: InputMaybe<Array<BlogPostWhereUniqueInput>>;
	/** Update multiple BlogPost documents */
	update?: InputMaybe<Array<BlogPostUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple BlogPost documents */
	upsert?: InputMaybe<Array<BlogPostUpsertWithNestedWhereUniqueInput>>;
};

export type BlogPostUpdateManyInput = {
	teaserHeadline?: InputMaybe<Scalars['String']>;
	teaserSubheadline?: InputMaybe<Scalars['String']>;
	teaserText?: InputMaybe<Scalars['String']>;
};

export type BlogPostUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: BlogPostUpdateManyInput;
	/** Document search */
	where: BlogPostWhereInput;
};

export type BlogPostUpdateOneInlineInput = {
	/** Connect existing BlogPost document */
	connect?: InputMaybe<BlogPostWhereUniqueInput>;
	/** Create and connect one BlogPost document */
	create?: InputMaybe<BlogPostCreateInput>;
	/** Delete currently connected BlogPost document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected BlogPost document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single BlogPost document */
	update?: InputMaybe<BlogPostUpdateWithNestedWhereUniqueInput>;
	/** Upsert single BlogPost document */
	upsert?: InputMaybe<BlogPostUpsertWithNestedWhereUniqueInput>;
};

export type BlogPostUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: BlogPostUpdateInput;
	/** Unique document search */
	where: BlogPostWhereUniqueInput;
};

export type BlogPostUpsertInput = {
	/** Create document if it didn't exist */
	create: BlogPostCreateInput;
	/** Update document if it exists */
	update: BlogPostUpdateInput;
};

export type BlogPostUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: BlogPostUpsertInput;
	/** Unique document search */
	where: BlogPostWhereUniqueInput;
};

/** Identifies documents */
export type BlogPostWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<BlogPostWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<BlogPostWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<BlogPostWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	heroBackgroundImage?: InputMaybe<AssetWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	page?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	slug?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	slug_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	slug_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	slug_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	slug_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	slug_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	slug_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	slug_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	slug_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	slug_starts_with?: InputMaybe<Scalars['String']>;
	source?: InputMaybe<LinkWhereInput>;
	teaserHeadline?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	teaserHeadline_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	teaserHeadline_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	teaserHeadline_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	teaserHeadline_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	teaserHeadline_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	teaserHeadline_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	teaserHeadline_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	teaserHeadline_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	teaserHeadline_starts_with?: InputMaybe<Scalars['String']>;
	teaserSubheadline?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	teaserSubheadline_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	teaserSubheadline_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	teaserSubheadline_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	teaserSubheadline_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	teaserSubheadline_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	teaserSubheadline_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	teaserSubheadline_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	teaserSubheadline_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	teaserSubheadline_starts_with?: InputMaybe<Scalars['String']>;
	teaserText?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	teaserText_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	teaserText_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	teaserText_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	teaserText_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	teaserText_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	teaserText_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	teaserText_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	teaserText_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	teaserText_starts_with?: InputMaybe<Scalars['String']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References BlogPost record uniquely */
export type BlogPostWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
	slug?: InputMaybe<Scalars['String']>;
};

export type CardIcon = Node & {
	__typename?: 'CardIcon';
	backgroundColor?: Maybe<Color>;
	cardsContainer?: Maybe<CardsContainer>;
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Get the document in other stages */
	documentInStages: Array<CardIcon>;
	headline?: Maybe<Scalars['String']>;
	/** List of CardIcon versions */
	history: Array<Version>;
	icon?: Maybe<Asset>;
	/** The unique identifier */
	id: Scalars['ID'];
	link?: Maybe<Link>;
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	scheduledIn: Array<ScheduledOperation>;
	/** System stage field */
	stage: Stage;
	subheadline?: Maybe<Scalars['String']>;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

export type CardIconCardsContainerArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CardIconCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CardIconDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

export type CardIconHistoryArgs = {
	limit?: Scalars['Int'];
	skip?: Scalars['Int'];
	stageOverride?: InputMaybe<Stage>;
};

export type CardIconIconArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CardIconLinkArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CardIconPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CardIconScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type CardIconUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CardIconConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: CardIconWhereUniqueInput;
};

/** A connection to a list of items. */
export type CardIconConnection = {
	__typename?: 'CardIconConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<CardIconEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type CardIconCreateInput = {
	backgroundColor?: InputMaybe<ColorInput>;
	cardsContainer?: InputMaybe<CardsContainerCreateOneInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	headline?: InputMaybe<Scalars['String']>;
	icon?: InputMaybe<AssetCreateOneInlineInput>;
	link?: InputMaybe<LinkCreateOneInlineInput>;
	subheadline?: InputMaybe<Scalars['String']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CardIconCreateManyInlineInput = {
	/** Connect multiple existing CardIcon documents */
	connect?: InputMaybe<Array<CardIconWhereUniqueInput>>;
	/** Create and connect multiple existing CardIcon documents */
	create?: InputMaybe<Array<CardIconCreateInput>>;
};

export type CardIconCreateOneInlineInput = {
	/** Connect one existing CardIcon document */
	connect?: InputMaybe<CardIconWhereUniqueInput>;
	/** Create and connect one CardIcon document */
	create?: InputMaybe<CardIconCreateInput>;
};

/** An edge in a connection. */
export type CardIconEdge = {
	__typename?: 'CardIconEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: CardIcon;
};

/** Identifies documents */
export type CardIconManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<CardIconWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<CardIconWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<CardIconWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	cardsContainer?: InputMaybe<CardsContainerWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	headline?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	headline_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	headline_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	headline_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	headline_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	headline_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	headline_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	headline_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	headline_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	headline_starts_with?: InputMaybe<Scalars['String']>;
	icon?: InputMaybe<AssetWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	link?: InputMaybe<LinkWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	subheadline?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	subheadline_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	subheadline_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	subheadline_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	subheadline_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	subheadline_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	subheadline_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	subheadline_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	subheadline_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	subheadline_starts_with?: InputMaybe<Scalars['String']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CardIconOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	HeadlineAsc = 'headline_ASC',
	HeadlineDesc = 'headline_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	SubheadlineAsc = 'subheadline_ASC',
	SubheadlineDesc = 'subheadline_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type CardIconUpdateInput = {
	backgroundColor?: InputMaybe<ColorInput>;
	cardsContainer?: InputMaybe<CardsContainerUpdateOneInlineInput>;
	headline?: InputMaybe<Scalars['String']>;
	icon?: InputMaybe<AssetUpdateOneInlineInput>;
	link?: InputMaybe<LinkUpdateOneInlineInput>;
	subheadline?: InputMaybe<Scalars['String']>;
};

export type CardIconUpdateManyInlineInput = {
	/** Connect multiple existing CardIcon documents */
	connect?: InputMaybe<Array<CardIconConnectInput>>;
	/** Create and connect multiple CardIcon documents */
	create?: InputMaybe<Array<CardIconCreateInput>>;
	/** Delete multiple CardIcon documents */
	delete?: InputMaybe<Array<CardIconWhereUniqueInput>>;
	/** Disconnect multiple CardIcon documents */
	disconnect?: InputMaybe<Array<CardIconWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing CardIcon documents */
	set?: InputMaybe<Array<CardIconWhereUniqueInput>>;
	/** Update multiple CardIcon documents */
	update?: InputMaybe<Array<CardIconUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple CardIcon documents */
	upsert?: InputMaybe<Array<CardIconUpsertWithNestedWhereUniqueInput>>;
};

export type CardIconUpdateManyInput = {
	backgroundColor?: InputMaybe<ColorInput>;
	headline?: InputMaybe<Scalars['String']>;
	subheadline?: InputMaybe<Scalars['String']>;
};

export type CardIconUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: CardIconUpdateManyInput;
	/** Document search */
	where: CardIconWhereInput;
};

export type CardIconUpdateOneInlineInput = {
	/** Connect existing CardIcon document */
	connect?: InputMaybe<CardIconWhereUniqueInput>;
	/** Create and connect one CardIcon document */
	create?: InputMaybe<CardIconCreateInput>;
	/** Delete currently connected CardIcon document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected CardIcon document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single CardIcon document */
	update?: InputMaybe<CardIconUpdateWithNestedWhereUniqueInput>;
	/** Upsert single CardIcon document */
	upsert?: InputMaybe<CardIconUpsertWithNestedWhereUniqueInput>;
};

export type CardIconUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: CardIconUpdateInput;
	/** Unique document search */
	where: CardIconWhereUniqueInput;
};

export type CardIconUpsertInput = {
	/** Create document if it didn't exist */
	create: CardIconCreateInput;
	/** Update document if it exists */
	update: CardIconUpdateInput;
};

export type CardIconUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: CardIconUpsertInput;
	/** Unique document search */
	where: CardIconWhereUniqueInput;
};

/** Identifies documents */
export type CardIconWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<CardIconWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<CardIconWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<CardIconWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	cardsContainer?: InputMaybe<CardsContainerWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	headline?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	headline_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	headline_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	headline_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	headline_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	headline_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	headline_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	headline_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	headline_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	headline_starts_with?: InputMaybe<Scalars['String']>;
	icon?: InputMaybe<AssetWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	link?: InputMaybe<LinkWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	subheadline?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	subheadline_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	subheadline_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	subheadline_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	subheadline_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	subheadline_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	subheadline_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	subheadline_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	subheadline_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	subheadline_starts_with?: InputMaybe<Scalars['String']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References CardIcon record uniquely */
export type CardIconWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
};

export type CardImage = Node & {
	__typename?: 'CardImage';
	cardsContainer?: Maybe<CardsContainer>;
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Get the document in other stages */
	documentInStages: Array<CardImage>;
	headline?: Maybe<Scalars['String']>;
	/** List of CardImage versions */
	history: Array<Version>;
	/** The unique identifier */
	id: Scalars['ID'];
	image?: Maybe<Asset>;
	link?: Maybe<Link>;
	linkToId?: Maybe<Scalars['String']>;
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	scheduledIn: Array<ScheduledOperation>;
	/** System stage field */
	stage: Stage;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

export type CardImageCardsContainerArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CardImageCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CardImageDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

export type CardImageHistoryArgs = {
	limit?: Scalars['Int'];
	skip?: Scalars['Int'];
	stageOverride?: InputMaybe<Stage>;
};

export type CardImageImageArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CardImageLinkArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CardImagePublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CardImageScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type CardImageUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CardImageConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: CardImageWhereUniqueInput;
};

/** A connection to a list of items. */
export type CardImageConnection = {
	__typename?: 'CardImageConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<CardImageEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type CardImageCreateInput = {
	cardsContainer?: InputMaybe<CardsContainerCreateOneInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	headline?: InputMaybe<Scalars['String']>;
	image?: InputMaybe<AssetCreateOneInlineInput>;
	link?: InputMaybe<LinkCreateOneInlineInput>;
	linkToId?: InputMaybe<Scalars['String']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CardImageCreateManyInlineInput = {
	/** Connect multiple existing CardImage documents */
	connect?: InputMaybe<Array<CardImageWhereUniqueInput>>;
	/** Create and connect multiple existing CardImage documents */
	create?: InputMaybe<Array<CardImageCreateInput>>;
};

export type CardImageCreateOneInlineInput = {
	/** Connect one existing CardImage document */
	connect?: InputMaybe<CardImageWhereUniqueInput>;
	/** Create and connect one CardImage document */
	create?: InputMaybe<CardImageCreateInput>;
};

/** An edge in a connection. */
export type CardImageEdge = {
	__typename?: 'CardImageEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: CardImage;
};

/** Identifies documents */
export type CardImageManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<CardImageWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<CardImageWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<CardImageWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	cardsContainer?: InputMaybe<CardsContainerWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	headline?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	headline_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	headline_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	headline_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	headline_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	headline_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	headline_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	headline_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	headline_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	headline_starts_with?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	image?: InputMaybe<AssetWhereInput>;
	link?: InputMaybe<LinkWhereInput>;
	linkToId?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	linkToId_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	linkToId_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	linkToId_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	linkToId_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	linkToId_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	linkToId_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	linkToId_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	linkToId_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	linkToId_starts_with?: InputMaybe<Scalars['String']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CardImageOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	HeadlineAsc = 'headline_ASC',
	HeadlineDesc = 'headline_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	LinkToIdAsc = 'linkToId_ASC',
	LinkToIdDesc = 'linkToId_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type CardImageUpdateInput = {
	cardsContainer?: InputMaybe<CardsContainerUpdateOneInlineInput>;
	headline?: InputMaybe<Scalars['String']>;
	image?: InputMaybe<AssetUpdateOneInlineInput>;
	link?: InputMaybe<LinkUpdateOneInlineInput>;
	linkToId?: InputMaybe<Scalars['String']>;
};

export type CardImageUpdateManyInlineInput = {
	/** Connect multiple existing CardImage documents */
	connect?: InputMaybe<Array<CardImageConnectInput>>;
	/** Create and connect multiple CardImage documents */
	create?: InputMaybe<Array<CardImageCreateInput>>;
	/** Delete multiple CardImage documents */
	delete?: InputMaybe<Array<CardImageWhereUniqueInput>>;
	/** Disconnect multiple CardImage documents */
	disconnect?: InputMaybe<Array<CardImageWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing CardImage documents */
	set?: InputMaybe<Array<CardImageWhereUniqueInput>>;
	/** Update multiple CardImage documents */
	update?: InputMaybe<Array<CardImageUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple CardImage documents */
	upsert?: InputMaybe<Array<CardImageUpsertWithNestedWhereUniqueInput>>;
};

export type CardImageUpdateManyInput = {
	headline?: InputMaybe<Scalars['String']>;
	linkToId?: InputMaybe<Scalars['String']>;
};

export type CardImageUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: CardImageUpdateManyInput;
	/** Document search */
	where: CardImageWhereInput;
};

export type CardImageUpdateOneInlineInput = {
	/** Connect existing CardImage document */
	connect?: InputMaybe<CardImageWhereUniqueInput>;
	/** Create and connect one CardImage document */
	create?: InputMaybe<CardImageCreateInput>;
	/** Delete currently connected CardImage document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected CardImage document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single CardImage document */
	update?: InputMaybe<CardImageUpdateWithNestedWhereUniqueInput>;
	/** Upsert single CardImage document */
	upsert?: InputMaybe<CardImageUpsertWithNestedWhereUniqueInput>;
};

export type CardImageUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: CardImageUpdateInput;
	/** Unique document search */
	where: CardImageWhereUniqueInput;
};

export type CardImageUpsertInput = {
	/** Create document if it didn't exist */
	create: CardImageCreateInput;
	/** Update document if it exists */
	update: CardImageUpdateInput;
};

export type CardImageUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: CardImageUpsertInput;
	/** Unique document search */
	where: CardImageWhereUniqueInput;
};

/** Identifies documents */
export type CardImageWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<CardImageWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<CardImageWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<CardImageWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	cardsContainer?: InputMaybe<CardsContainerWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	headline?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	headline_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	headline_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	headline_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	headline_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	headline_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	headline_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	headline_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	headline_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	headline_starts_with?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	image?: InputMaybe<AssetWhereInput>;
	link?: InputMaybe<LinkWhereInput>;
	linkToId?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	linkToId_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	linkToId_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	linkToId_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	linkToId_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	linkToId_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	linkToId_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	linkToId_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	linkToId_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	linkToId_starts_with?: InputMaybe<Scalars['String']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References CardImage record uniquely */
export type CardImageWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
};

export type CardsContainer = Node & {
	__typename?: 'CardsContainer';
	blogPost?: Maybe<BlogPost>;
	cards: Array<CardsContainerCard>;
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Get the document in other stages */
	documentInStages: Array<CardsContainer>;
	headline?: Maybe<Scalars['String']>;
	/** List of CardsContainer versions */
	history: Array<Version>;
	/** The unique identifier */
	id: Scalars['ID'];
	paddingBottom?: Maybe<Padding>;
	paddingTop?: Maybe<Padding>;
	page?: Maybe<Page>;
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	scheduledIn: Array<ScheduledOperation>;
	/** System stage field */
	stage: Stage;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

export type CardsContainerBlogPostArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CardsContainerCardsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
};

export type CardsContainerCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CardsContainerDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

export type CardsContainerHistoryArgs = {
	limit?: Scalars['Int'];
	skip?: Scalars['Int'];
	stageOverride?: InputMaybe<Stage>;
};

export type CardsContainerPageArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CardsContainerPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CardsContainerScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type CardsContainerUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CardsContainerCard = CardIcon | CardImage;

export type CardsContainerCardConnectInput = {
	CardIcon?: InputMaybe<CardIconConnectInput>;
	CardImage?: InputMaybe<CardImageConnectInput>;
};

export type CardsContainerCardCreateInput = {
	CardIcon?: InputMaybe<CardIconCreateInput>;
	CardImage?: InputMaybe<CardImageCreateInput>;
};

export type CardsContainerCardCreateManyInlineInput = {
	/** Connect multiple existing CardsContainerCard documents */
	connect?: InputMaybe<Array<CardsContainerCardWhereUniqueInput>>;
	/** Create and connect multiple existing CardsContainerCard documents */
	create?: InputMaybe<Array<CardsContainerCardCreateInput>>;
};

export type CardsContainerCardCreateOneInlineInput = {
	/** Connect one existing CardsContainerCard document */
	connect?: InputMaybe<CardsContainerCardWhereUniqueInput>;
	/** Create and connect one CardsContainerCard document */
	create?: InputMaybe<CardsContainerCardCreateInput>;
};

export type CardsContainerCardUpdateInput = {
	CardIcon?: InputMaybe<CardIconUpdateInput>;
	CardImage?: InputMaybe<CardImageUpdateInput>;
};

export type CardsContainerCardUpdateManyInlineInput = {
	/** Connect multiple existing CardsContainerCard documents */
	connect?: InputMaybe<Array<CardsContainerCardConnectInput>>;
	/** Create and connect multiple CardsContainerCard documents */
	create?: InputMaybe<Array<CardsContainerCardCreateInput>>;
	/** Delete multiple CardsContainerCard documents */
	delete?: InputMaybe<Array<CardsContainerCardWhereUniqueInput>>;
	/** Disconnect multiple CardsContainerCard documents */
	disconnect?: InputMaybe<Array<CardsContainerCardWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing CardsContainerCard documents */
	set?: InputMaybe<Array<CardsContainerCardWhereUniqueInput>>;
	/** Update multiple CardsContainerCard documents */
	update?: InputMaybe<Array<CardsContainerCardUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple CardsContainerCard documents */
	upsert?: InputMaybe<Array<CardsContainerCardUpsertWithNestedWhereUniqueInput>>;
};

export type CardsContainerCardUpdateManyWithNestedWhereInput = {
	CardIcon?: InputMaybe<CardIconUpdateManyWithNestedWhereInput>;
	CardImage?: InputMaybe<CardImageUpdateManyWithNestedWhereInput>;
};

export type CardsContainerCardUpdateOneInlineInput = {
	/** Connect existing CardsContainerCard document */
	connect?: InputMaybe<CardsContainerCardWhereUniqueInput>;
	/** Create and connect one CardsContainerCard document */
	create?: InputMaybe<CardsContainerCardCreateInput>;
	/** Delete currently connected CardsContainerCard document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected CardsContainerCard document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single CardsContainerCard document */
	update?: InputMaybe<CardsContainerCardUpdateWithNestedWhereUniqueInput>;
	/** Upsert single CardsContainerCard document */
	upsert?: InputMaybe<CardsContainerCardUpsertWithNestedWhereUniqueInput>;
};

export type CardsContainerCardUpdateWithNestedWhereUniqueInput = {
	CardIcon?: InputMaybe<CardIconUpdateWithNestedWhereUniqueInput>;
	CardImage?: InputMaybe<CardImageUpdateWithNestedWhereUniqueInput>;
};

export type CardsContainerCardUpsertWithNestedWhereUniqueInput = {
	CardIcon?: InputMaybe<CardIconUpsertWithNestedWhereUniqueInput>;
	CardImage?: InputMaybe<CardImageUpsertWithNestedWhereUniqueInput>;
};

export type CardsContainerCardWhereInput = {
	CardIcon?: InputMaybe<CardIconWhereInput>;
	CardImage?: InputMaybe<CardImageWhereInput>;
};

export type CardsContainerCardWhereUniqueInput = {
	CardIcon?: InputMaybe<CardIconWhereUniqueInput>;
	CardImage?: InputMaybe<CardImageWhereUniqueInput>;
};

export type CardsContainerConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: CardsContainerWhereUniqueInput;
};

/** A connection to a list of items. */
export type CardsContainerConnection = {
	__typename?: 'CardsContainerConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<CardsContainerEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type CardsContainerCreateInput = {
	blogPost?: InputMaybe<BlogPostCreateOneInlineInput>;
	cards?: InputMaybe<CardsContainerCardCreateManyInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	headline?: InputMaybe<Scalars['String']>;
	paddingBottom?: InputMaybe<Padding>;
	paddingTop?: InputMaybe<Padding>;
	page?: InputMaybe<PageCreateOneInlineInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CardsContainerCreateManyInlineInput = {
	/** Connect multiple existing CardsContainer documents */
	connect?: InputMaybe<Array<CardsContainerWhereUniqueInput>>;
	/** Create and connect multiple existing CardsContainer documents */
	create?: InputMaybe<Array<CardsContainerCreateInput>>;
};

export type CardsContainerCreateOneInlineInput = {
	/** Connect one existing CardsContainer document */
	connect?: InputMaybe<CardsContainerWhereUniqueInput>;
	/** Create and connect one CardsContainer document */
	create?: InputMaybe<CardsContainerCreateInput>;
};

/** An edge in a connection. */
export type CardsContainerEdge = {
	__typename?: 'CardsContainerEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: CardsContainer;
};

/** Identifies documents */
export type CardsContainerManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<CardsContainerWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<CardsContainerWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<CardsContainerWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	blogPost?: InputMaybe<BlogPostWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	headline?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	headline_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	headline_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	headline_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	headline_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	headline_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	headline_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	headline_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	headline_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	headline_starts_with?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	paddingBottom?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	paddingBottom_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	paddingBottom_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	paddingBottom_not_in?: InputMaybe<Array<Padding>>;
	paddingTop?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	paddingTop_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	paddingTop_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	paddingTop_not_in?: InputMaybe<Array<Padding>>;
	page?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CardsContainerOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	HeadlineAsc = 'headline_ASC',
	HeadlineDesc = 'headline_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PaddingBottomAsc = 'paddingBottom_ASC',
	PaddingBottomDesc = 'paddingBottom_DESC',
	PaddingTopAsc = 'paddingTop_ASC',
	PaddingTopDesc = 'paddingTop_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type CardsContainerUpdateInput = {
	blogPost?: InputMaybe<BlogPostUpdateOneInlineInput>;
	cards?: InputMaybe<CardsContainerCardUpdateManyInlineInput>;
	headline?: InputMaybe<Scalars['String']>;
	paddingBottom?: InputMaybe<Padding>;
	paddingTop?: InputMaybe<Padding>;
	page?: InputMaybe<PageUpdateOneInlineInput>;
};

export type CardsContainerUpdateManyInlineInput = {
	/** Connect multiple existing CardsContainer documents */
	connect?: InputMaybe<Array<CardsContainerConnectInput>>;
	/** Create and connect multiple CardsContainer documents */
	create?: InputMaybe<Array<CardsContainerCreateInput>>;
	/** Delete multiple CardsContainer documents */
	delete?: InputMaybe<Array<CardsContainerWhereUniqueInput>>;
	/** Disconnect multiple CardsContainer documents */
	disconnect?: InputMaybe<Array<CardsContainerWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing CardsContainer documents */
	set?: InputMaybe<Array<CardsContainerWhereUniqueInput>>;
	/** Update multiple CardsContainer documents */
	update?: InputMaybe<Array<CardsContainerUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple CardsContainer documents */
	upsert?: InputMaybe<Array<CardsContainerUpsertWithNestedWhereUniqueInput>>;
};

export type CardsContainerUpdateManyInput = {
	headline?: InputMaybe<Scalars['String']>;
	paddingBottom?: InputMaybe<Padding>;
	paddingTop?: InputMaybe<Padding>;
};

export type CardsContainerUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: CardsContainerUpdateManyInput;
	/** Document search */
	where: CardsContainerWhereInput;
};

export type CardsContainerUpdateOneInlineInput = {
	/** Connect existing CardsContainer document */
	connect?: InputMaybe<CardsContainerWhereUniqueInput>;
	/** Create and connect one CardsContainer document */
	create?: InputMaybe<CardsContainerCreateInput>;
	/** Delete currently connected CardsContainer document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected CardsContainer document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single CardsContainer document */
	update?: InputMaybe<CardsContainerUpdateWithNestedWhereUniqueInput>;
	/** Upsert single CardsContainer document */
	upsert?: InputMaybe<CardsContainerUpsertWithNestedWhereUniqueInput>;
};

export type CardsContainerUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: CardsContainerUpdateInput;
	/** Unique document search */
	where: CardsContainerWhereUniqueInput;
};

export type CardsContainerUpsertInput = {
	/** Create document if it didn't exist */
	create: CardsContainerCreateInput;
	/** Update document if it exists */
	update: CardsContainerUpdateInput;
};

export type CardsContainerUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: CardsContainerUpsertInput;
	/** Unique document search */
	where: CardsContainerWhereUniqueInput;
};

/** Identifies documents */
export type CardsContainerWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<CardsContainerWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<CardsContainerWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<CardsContainerWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	blogPost?: InputMaybe<BlogPostWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	headline?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	headline_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	headline_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	headline_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	headline_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	headline_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	headline_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	headline_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	headline_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	headline_starts_with?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	paddingBottom?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	paddingBottom_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	paddingBottom_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	paddingBottom_not_in?: InputMaybe<Array<Padding>>;
	paddingTop?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	paddingTop_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	paddingTop_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	paddingTop_not_in?: InputMaybe<Array<Padding>>;
	page?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References CardsContainer record uniquely */
export type CardsContainerWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
	__typename?: 'Color';
	css: Scalars['String'];
	hex: Scalars['Hex'];
	rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
	hex?: InputMaybe<Scalars['Hex']>;
	rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
	/** Connect document after specified document */
	after?: InputMaybe<Scalars['ID']>;
	/** Connect document before specified document */
	before?: InputMaybe<Scalars['ID']>;
	/** Connect document at last position */
	end?: InputMaybe<Scalars['Boolean']>;
	/** Connect document at first position */
	start?: InputMaybe<Scalars['Boolean']>;
};

export type CtaLink = Node & {
	__typename?: 'CtaLink';
	blogPost?: Maybe<BlogPost>;
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Get the document in other stages */
	documentInStages: Array<CtaLink>;
	/** List of CtaLink versions */
	history: Array<Version>;
	/** The unique identifier */
	id: Scalars['ID'];
	padding: Padding;
	page?: Maybe<Page>;
	pages: Array<Page>;
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	scheduledIn: Array<ScheduledOperation>;
	/** System stage field */
	stage: Stage;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

export type CtaLinkBlogPostArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CtaLinkCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CtaLinkDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

export type CtaLinkHistoryArgs = {
	limit?: Scalars['Int'];
	skip?: Scalars['Int'];
	stageOverride?: InputMaybe<Stage>;
};

export type CtaLinkPageArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CtaLinkPagesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<PageWhereInput>;
};

export type CtaLinkPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CtaLinkScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type CtaLinkUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type CtaLinkConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: CtaLinkWhereUniqueInput;
};

/** A connection to a list of items. */
export type CtaLinkConnection = {
	__typename?: 'CtaLinkConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<CtaLinkEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type CtaLinkCreateInput = {
	blogPost?: InputMaybe<BlogPostCreateOneInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	padding: Padding;
	page?: InputMaybe<PageCreateOneInlineInput>;
	pages?: InputMaybe<PageCreateManyInlineInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CtaLinkCreateManyInlineInput = {
	/** Connect multiple existing CtaLink documents */
	connect?: InputMaybe<Array<CtaLinkWhereUniqueInput>>;
	/** Create and connect multiple existing CtaLink documents */
	create?: InputMaybe<Array<CtaLinkCreateInput>>;
};

export type CtaLinkCreateOneInlineInput = {
	/** Connect one existing CtaLink document */
	connect?: InputMaybe<CtaLinkWhereUniqueInput>;
	/** Create and connect one CtaLink document */
	create?: InputMaybe<CtaLinkCreateInput>;
};

/** An edge in a connection. */
export type CtaLinkEdge = {
	__typename?: 'CtaLinkEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: CtaLink;
};

/** Identifies documents */
export type CtaLinkManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<CtaLinkWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<CtaLinkWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<CtaLinkWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	blogPost?: InputMaybe<BlogPostWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	padding?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	padding_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	padding_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	padding_not_in?: InputMaybe<Array<Padding>>;
	page?: InputMaybe<PageWhereInput>;
	pages_every?: InputMaybe<PageWhereInput>;
	pages_none?: InputMaybe<PageWhereInput>;
	pages_some?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CtaLinkOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PaddingAsc = 'padding_ASC',
	PaddingDesc = 'padding_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type CtaLinkUpdateInput = {
	blogPost?: InputMaybe<BlogPostUpdateOneInlineInput>;
	padding?: InputMaybe<Padding>;
	page?: InputMaybe<PageUpdateOneInlineInput>;
	pages?: InputMaybe<PageUpdateManyInlineInput>;
};

export type CtaLinkUpdateManyInlineInput = {
	/** Connect multiple existing CtaLink documents */
	connect?: InputMaybe<Array<CtaLinkConnectInput>>;
	/** Create and connect multiple CtaLink documents */
	create?: InputMaybe<Array<CtaLinkCreateInput>>;
	/** Delete multiple CtaLink documents */
	delete?: InputMaybe<Array<CtaLinkWhereUniqueInput>>;
	/** Disconnect multiple CtaLink documents */
	disconnect?: InputMaybe<Array<CtaLinkWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing CtaLink documents */
	set?: InputMaybe<Array<CtaLinkWhereUniqueInput>>;
	/** Update multiple CtaLink documents */
	update?: InputMaybe<Array<CtaLinkUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple CtaLink documents */
	upsert?: InputMaybe<Array<CtaLinkUpsertWithNestedWhereUniqueInput>>;
};

export type CtaLinkUpdateManyInput = {
	padding?: InputMaybe<Padding>;
};

export type CtaLinkUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: CtaLinkUpdateManyInput;
	/** Document search */
	where: CtaLinkWhereInput;
};

export type CtaLinkUpdateOneInlineInput = {
	/** Connect existing CtaLink document */
	connect?: InputMaybe<CtaLinkWhereUniqueInput>;
	/** Create and connect one CtaLink document */
	create?: InputMaybe<CtaLinkCreateInput>;
	/** Delete currently connected CtaLink document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected CtaLink document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single CtaLink document */
	update?: InputMaybe<CtaLinkUpdateWithNestedWhereUniqueInput>;
	/** Upsert single CtaLink document */
	upsert?: InputMaybe<CtaLinkUpsertWithNestedWhereUniqueInput>;
};

export type CtaLinkUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: CtaLinkUpdateInput;
	/** Unique document search */
	where: CtaLinkWhereUniqueInput;
};

export type CtaLinkUpsertInput = {
	/** Create document if it didn't exist */
	create: CtaLinkCreateInput;
	/** Update document if it exists */
	update: CtaLinkUpdateInput;
};

export type CtaLinkUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: CtaLinkUpsertInput;
	/** Unique document search */
	where: CtaLinkWhereUniqueInput;
};

/** Identifies documents */
export type CtaLinkWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<CtaLinkWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<CtaLinkWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<CtaLinkWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	blogPost?: InputMaybe<BlogPostWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	padding?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	padding_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	padding_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	padding_not_in?: InputMaybe<Array<Padding>>;
	page?: InputMaybe<PageWhereInput>;
	pages_every?: InputMaybe<PageWhereInput>;
	pages_none?: InputMaybe<PageWhereInput>;
	pages_some?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References CtaLink record uniquely */
export type CtaLinkWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
};

export type Divider = Node & {
	__typename?: 'Divider';
	blogPost?: Maybe<BlogPost>;
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Get the document in other stages */
	documentInStages: Array<Divider>;
	/** List of Divider versions */
	history: Array<Version>;
	/** The unique identifier */
	id: Scalars['ID'];
	padding: Padding;
	page?: Maybe<Page>;
	pages: Array<Page>;
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	scheduledIn: Array<ScheduledOperation>;
	/** System stage field */
	stage: Stage;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

export type DividerBlogPostArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type DividerCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type DividerDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

export type DividerHistoryArgs = {
	limit?: Scalars['Int'];
	skip?: Scalars['Int'];
	stageOverride?: InputMaybe<Stage>;
};

export type DividerPageArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type DividerPagesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<PageWhereInput>;
};

export type DividerPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type DividerScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type DividerUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type DividerConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: DividerWhereUniqueInput;
};

/** A connection to a list of items. */
export type DividerConnection = {
	__typename?: 'DividerConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<DividerEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type DividerCreateInput = {
	blogPost?: InputMaybe<BlogPostCreateOneInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	padding: Padding;
	page?: InputMaybe<PageCreateOneInlineInput>;
	pages?: InputMaybe<PageCreateManyInlineInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DividerCreateManyInlineInput = {
	/** Connect multiple existing Divider documents */
	connect?: InputMaybe<Array<DividerWhereUniqueInput>>;
	/** Create and connect multiple existing Divider documents */
	create?: InputMaybe<Array<DividerCreateInput>>;
};

export type DividerCreateOneInlineInput = {
	/** Connect one existing Divider document */
	connect?: InputMaybe<DividerWhereUniqueInput>;
	/** Create and connect one Divider document */
	create?: InputMaybe<DividerCreateInput>;
};

/** An edge in a connection. */
export type DividerEdge = {
	__typename?: 'DividerEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: Divider;
};

/** Identifies documents */
export type DividerManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<DividerWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<DividerWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<DividerWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	blogPost?: InputMaybe<BlogPostWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	padding?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	padding_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	padding_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	padding_not_in?: InputMaybe<Array<Padding>>;
	page?: InputMaybe<PageWhereInput>;
	pages_every?: InputMaybe<PageWhereInput>;
	pages_none?: InputMaybe<PageWhereInput>;
	pages_some?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum DividerOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PaddingAsc = 'padding_ASC',
	PaddingDesc = 'padding_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type DividerUpdateInput = {
	blogPost?: InputMaybe<BlogPostUpdateOneInlineInput>;
	padding?: InputMaybe<Padding>;
	page?: InputMaybe<PageUpdateOneInlineInput>;
	pages?: InputMaybe<PageUpdateManyInlineInput>;
};

export type DividerUpdateManyInlineInput = {
	/** Connect multiple existing Divider documents */
	connect?: InputMaybe<Array<DividerConnectInput>>;
	/** Create and connect multiple Divider documents */
	create?: InputMaybe<Array<DividerCreateInput>>;
	/** Delete multiple Divider documents */
	delete?: InputMaybe<Array<DividerWhereUniqueInput>>;
	/** Disconnect multiple Divider documents */
	disconnect?: InputMaybe<Array<DividerWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Divider documents */
	set?: InputMaybe<Array<DividerWhereUniqueInput>>;
	/** Update multiple Divider documents */
	update?: InputMaybe<Array<DividerUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Divider documents */
	upsert?: InputMaybe<Array<DividerUpsertWithNestedWhereUniqueInput>>;
};

export type DividerUpdateManyInput = {
	padding?: InputMaybe<Padding>;
};

export type DividerUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: DividerUpdateManyInput;
	/** Document search */
	where: DividerWhereInput;
};

export type DividerUpdateOneInlineInput = {
	/** Connect existing Divider document */
	connect?: InputMaybe<DividerWhereUniqueInput>;
	/** Create and connect one Divider document */
	create?: InputMaybe<DividerCreateInput>;
	/** Delete currently connected Divider document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected Divider document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single Divider document */
	update?: InputMaybe<DividerUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Divider document */
	upsert?: InputMaybe<DividerUpsertWithNestedWhereUniqueInput>;
};

export type DividerUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: DividerUpdateInput;
	/** Unique document search */
	where: DividerWhereUniqueInput;
};

export type DividerUpsertInput = {
	/** Create document if it didn't exist */
	create: DividerCreateInput;
	/** Update document if it exists */
	update: DividerUpdateInput;
};

export type DividerUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: DividerUpsertInput;
	/** Unique document search */
	where: DividerWhereUniqueInput;
};

/** Identifies documents */
export type DividerWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<DividerWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<DividerWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<DividerWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	blogPost?: InputMaybe<BlogPostWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	padding?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	padding_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	padding_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	padding_not_in?: InputMaybe<Array<Padding>>;
	page?: InputMaybe<PageWhereInput>;
	pages_every?: InputMaybe<PageWhereInput>;
	pages_none?: InputMaybe<PageWhereInput>;
	pages_some?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Divider record uniquely */
export type DividerWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
};

export enum DocumentFileTypes {
	Doc = 'doc',
	Docx = 'docx',
	Html = 'html',
	Jpg = 'jpg',
	Odp = 'odp',
	Ods = 'ods',
	Odt = 'odt',
	Pdf = 'pdf',
	Png = 'png',
	Ppt = 'ppt',
	Pptx = 'pptx',
	Svg = 'svg',
	Txt = 'txt',
	Webp = 'webp',
	Xls = 'xls',
	Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
	/**
	 * Transforms a document into a desired file type.
	 * See this matrix for format support:
	 *
	 * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
	 * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
	 * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
	 * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
	 * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
	 * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
	 * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
	 * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
	 * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
	 * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
	 * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
	 * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
	 * SVG:	jpg, odp, ods, odt, pdf, png, and webp
	 * HTML:	jpg, odt, pdf, svg, txt, and webp
	 * TXT:	jpg, html, odt, pdf, svg, and webp
	 */
	format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
	/** Changes the output for the file. */
	output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
	__typename?: 'DocumentVersion';
	createdAt: Scalars['DateTime'];
	data?: Maybe<Scalars['Json']>;
	id: Scalars['ID'];
	revision: Scalars['Int'];
	stage: Stage;
};

export type Eyecatcher = Node & {
	__typename?: 'Eyecatcher';
	buttonLabel?: Maybe<Scalars['String']>;
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Get the document in other stages */
	documentInStages: Array<Eyecatcher>;
	headline?: Maybe<Scalars['String']>;
	/** List of Eyecatcher versions */
	history: Array<Version>;
	/** The unique identifier */
	id: Scalars['ID'];
	image?: Maybe<Asset>;
	/** System Locale field */
	locale: Locale;
	/** Get the other localizations for this document */
	localizations: Array<Eyecatcher>;
	paddingBottom?: Maybe<Padding>;
	paddingTop?: Maybe<Padding>;
	page?: Maybe<Page>;
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	scheduledIn: Array<ScheduledOperation>;
	/** System stage field */
	stage: Stage;
	subheadline?: Maybe<Scalars['String']>;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

export type EyecatcherCreatedAtArgs = {
	variation?: SystemDateTimeFieldVariation;
};

export type EyecatcherCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type EyecatcherDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

export type EyecatcherHistoryArgs = {
	limit?: Scalars['Int'];
	skip?: Scalars['Int'];
	stageOverride?: InputMaybe<Stage>;
};

export type EyecatcherImageArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type EyecatcherLocalizationsArgs = {
	includeCurrent?: Scalars['Boolean'];
	locales?: Array<Locale>;
};

export type EyecatcherPageArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type EyecatcherPublishedAtArgs = {
	variation?: SystemDateTimeFieldVariation;
};

export type EyecatcherPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type EyecatcherScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type EyecatcherUpdatedAtArgs = {
	variation?: SystemDateTimeFieldVariation;
};

export type EyecatcherUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type EyecatcherConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: EyecatcherWhereUniqueInput;
};

/** A connection to a list of items. */
export type EyecatcherConnection = {
	__typename?: 'EyecatcherConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<EyecatcherEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type EyecatcherCreateInput = {
	buttonLabel?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** headline input for default locale (en) */
	headline?: InputMaybe<Scalars['String']>;
	image?: InputMaybe<AssetCreateOneInlineInput>;
	/** Inline mutations for managing document localizations excluding the default locale */
	localizations?: InputMaybe<EyecatcherCreateLocalizationsInput>;
	paddingBottom?: InputMaybe<Padding>;
	paddingTop?: InputMaybe<Padding>;
	page?: InputMaybe<PageCreateOneInlineInput>;
	/** subheadline input for default locale (en) */
	subheadline?: InputMaybe<Scalars['String']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EyecatcherCreateLocalizationDataInput = {
	createdAt?: InputMaybe<Scalars['DateTime']>;
	headline?: InputMaybe<Scalars['String']>;
	subheadline?: InputMaybe<Scalars['String']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EyecatcherCreateLocalizationInput = {
	/** Localization input */
	data: EyecatcherCreateLocalizationDataInput;
	locale: Locale;
};

export type EyecatcherCreateLocalizationsInput = {
	/** Create localizations for the newly-created document */
	create?: InputMaybe<Array<EyecatcherCreateLocalizationInput>>;
};

export type EyecatcherCreateManyInlineInput = {
	/** Connect multiple existing Eyecatcher documents */
	connect?: InputMaybe<Array<EyecatcherWhereUniqueInput>>;
	/** Create and connect multiple existing Eyecatcher documents */
	create?: InputMaybe<Array<EyecatcherCreateInput>>;
};

export type EyecatcherCreateOneInlineInput = {
	/** Connect one existing Eyecatcher document */
	connect?: InputMaybe<EyecatcherWhereUniqueInput>;
	/** Create and connect one Eyecatcher document */
	create?: InputMaybe<EyecatcherCreateInput>;
};

/** An edge in a connection. */
export type EyecatcherEdge = {
	__typename?: 'EyecatcherEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: Eyecatcher;
};

/** Identifies documents */
export type EyecatcherManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<EyecatcherWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<EyecatcherWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<EyecatcherWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	buttonLabel?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	buttonLabel_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	buttonLabel_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	buttonLabel_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	buttonLabel_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	buttonLabel_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	buttonLabel_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	buttonLabel_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	buttonLabel_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	buttonLabel_starts_with?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	image?: InputMaybe<AssetWhereInput>;
	paddingBottom?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	paddingBottom_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	paddingBottom_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	paddingBottom_not_in?: InputMaybe<Array<Padding>>;
	paddingTop?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	paddingTop_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	paddingTop_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	paddingTop_not_in?: InputMaybe<Array<Padding>>;
	page?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum EyecatcherOrderByInput {
	ButtonLabelAsc = 'buttonLabel_ASC',
	ButtonLabelDesc = 'buttonLabel_DESC',
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	HeadlineAsc = 'headline_ASC',
	HeadlineDesc = 'headline_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PaddingBottomAsc = 'paddingBottom_ASC',
	PaddingBottomDesc = 'paddingBottom_DESC',
	PaddingTopAsc = 'paddingTop_ASC',
	PaddingTopDesc = 'paddingTop_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	SubheadlineAsc = 'subheadline_ASC',
	SubheadlineDesc = 'subheadline_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type EyecatcherUpdateInput = {
	buttonLabel?: InputMaybe<Scalars['String']>;
	/** headline input for default locale (en) */
	headline?: InputMaybe<Scalars['String']>;
	image?: InputMaybe<AssetUpdateOneInlineInput>;
	/** Manage document localizations */
	localizations?: InputMaybe<EyecatcherUpdateLocalizationsInput>;
	paddingBottom?: InputMaybe<Padding>;
	paddingTop?: InputMaybe<Padding>;
	page?: InputMaybe<PageUpdateOneInlineInput>;
	/** subheadline input for default locale (en) */
	subheadline?: InputMaybe<Scalars['String']>;
};

export type EyecatcherUpdateLocalizationDataInput = {
	headline?: InputMaybe<Scalars['String']>;
	subheadline?: InputMaybe<Scalars['String']>;
};

export type EyecatcherUpdateLocalizationInput = {
	data: EyecatcherUpdateLocalizationDataInput;
	locale: Locale;
};

export type EyecatcherUpdateLocalizationsInput = {
	/** Localizations to create */
	create?: InputMaybe<Array<EyecatcherCreateLocalizationInput>>;
	/** Localizations to delete */
	delete?: InputMaybe<Array<Locale>>;
	/** Localizations to update */
	update?: InputMaybe<Array<EyecatcherUpdateLocalizationInput>>;
	upsert?: InputMaybe<Array<EyecatcherUpsertLocalizationInput>>;
};

export type EyecatcherUpdateManyInlineInput = {
	/** Connect multiple existing Eyecatcher documents */
	connect?: InputMaybe<Array<EyecatcherConnectInput>>;
	/** Create and connect multiple Eyecatcher documents */
	create?: InputMaybe<Array<EyecatcherCreateInput>>;
	/** Delete multiple Eyecatcher documents */
	delete?: InputMaybe<Array<EyecatcherWhereUniqueInput>>;
	/** Disconnect multiple Eyecatcher documents */
	disconnect?: InputMaybe<Array<EyecatcherWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Eyecatcher documents */
	set?: InputMaybe<Array<EyecatcherWhereUniqueInput>>;
	/** Update multiple Eyecatcher documents */
	update?: InputMaybe<Array<EyecatcherUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Eyecatcher documents */
	upsert?: InputMaybe<Array<EyecatcherUpsertWithNestedWhereUniqueInput>>;
};

export type EyecatcherUpdateManyInput = {
	buttonLabel?: InputMaybe<Scalars['String']>;
	/** headline input for default locale (en) */
	headline?: InputMaybe<Scalars['String']>;
	/** Optional updates to localizations */
	localizations?: InputMaybe<EyecatcherUpdateManyLocalizationsInput>;
	paddingBottom?: InputMaybe<Padding>;
	paddingTop?: InputMaybe<Padding>;
	/** subheadline input for default locale (en) */
	subheadline?: InputMaybe<Scalars['String']>;
};

export type EyecatcherUpdateManyLocalizationDataInput = {
	headline?: InputMaybe<Scalars['String']>;
	subheadline?: InputMaybe<Scalars['String']>;
};

export type EyecatcherUpdateManyLocalizationInput = {
	data: EyecatcherUpdateManyLocalizationDataInput;
	locale: Locale;
};

export type EyecatcherUpdateManyLocalizationsInput = {
	/** Localizations to update */
	update?: InputMaybe<Array<EyecatcherUpdateManyLocalizationInput>>;
};

export type EyecatcherUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: EyecatcherUpdateManyInput;
	/** Document search */
	where: EyecatcherWhereInput;
};

export type EyecatcherUpdateOneInlineInput = {
	/** Connect existing Eyecatcher document */
	connect?: InputMaybe<EyecatcherWhereUniqueInput>;
	/** Create and connect one Eyecatcher document */
	create?: InputMaybe<EyecatcherCreateInput>;
	/** Delete currently connected Eyecatcher document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected Eyecatcher document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single Eyecatcher document */
	update?: InputMaybe<EyecatcherUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Eyecatcher document */
	upsert?: InputMaybe<EyecatcherUpsertWithNestedWhereUniqueInput>;
};

export type EyecatcherUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: EyecatcherUpdateInput;
	/** Unique document search */
	where: EyecatcherWhereUniqueInput;
};

export type EyecatcherUpsertInput = {
	/** Create document if it didn't exist */
	create: EyecatcherCreateInput;
	/** Update document if it exists */
	update: EyecatcherUpdateInput;
};

export type EyecatcherUpsertLocalizationInput = {
	create: EyecatcherCreateLocalizationDataInput;
	locale: Locale;
	update: EyecatcherUpdateLocalizationDataInput;
};

export type EyecatcherUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: EyecatcherUpsertInput;
	/** Unique document search */
	where: EyecatcherWhereUniqueInput;
};

/** Identifies documents */
export type EyecatcherWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<EyecatcherWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<EyecatcherWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<EyecatcherWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	buttonLabel?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	buttonLabel_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	buttonLabel_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	buttonLabel_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	buttonLabel_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	buttonLabel_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	buttonLabel_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	buttonLabel_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	buttonLabel_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	buttonLabel_starts_with?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	headline?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	headline_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	headline_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	headline_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	headline_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	headline_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	headline_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	headline_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	headline_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	headline_starts_with?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	image?: InputMaybe<AssetWhereInput>;
	paddingBottom?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	paddingBottom_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	paddingBottom_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	paddingBottom_not_in?: InputMaybe<Array<Padding>>;
	paddingTop?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	paddingTop_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	paddingTop_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	paddingTop_not_in?: InputMaybe<Array<Padding>>;
	page?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	subheadline?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	subheadline_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	subheadline_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	subheadline_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	subheadline_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	subheadline_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	subheadline_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	subheadline_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	subheadline_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	subheadline_starts_with?: InputMaybe<Scalars['String']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Eyecatcher record uniquely */
export type EyecatcherWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
};

export type HeroImage = Node & {
	__typename?: 'HeroImage';
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Get the document in other stages */
	documentInStages: Array<HeroImage>;
	/** List of HeroImage versions */
	history: Array<Version>;
	icon?: Maybe<Asset>;
	/** The unique identifier */
	id: Scalars['ID'];
	image?: Maybe<Asset>;
	page?: Maybe<Page>;
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	scheduledIn: Array<ScheduledOperation>;
	/** System stage field */
	stage: Stage;
	strokeColor?: Maybe<Color>;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

export type HeroImageCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type HeroImageDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

export type HeroImageHistoryArgs = {
	limit?: Scalars['Int'];
	skip?: Scalars['Int'];
	stageOverride?: InputMaybe<Stage>;
};

export type HeroImageIconArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type HeroImageImageArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type HeroImagePageArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type HeroImagePublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type HeroImageScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type HeroImageUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type HeroImageConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: HeroImageWhereUniqueInput;
};

/** A connection to a list of items. */
export type HeroImageConnection = {
	__typename?: 'HeroImageConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<HeroImageEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type HeroImageCreateInput = {
	createdAt?: InputMaybe<Scalars['DateTime']>;
	icon?: InputMaybe<AssetCreateOneInlineInput>;
	image?: InputMaybe<AssetCreateOneInlineInput>;
	page?: InputMaybe<PageCreateOneInlineInput>;
	strokeColor?: InputMaybe<ColorInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type HeroImageCreateManyInlineInput = {
	/** Connect multiple existing HeroImage documents */
	connect?: InputMaybe<Array<HeroImageWhereUniqueInput>>;
	/** Create and connect multiple existing HeroImage documents */
	create?: InputMaybe<Array<HeroImageCreateInput>>;
};

export type HeroImageCreateOneInlineInput = {
	/** Connect one existing HeroImage document */
	connect?: InputMaybe<HeroImageWhereUniqueInput>;
	/** Create and connect one HeroImage document */
	create?: InputMaybe<HeroImageCreateInput>;
};

/** An edge in a connection. */
export type HeroImageEdge = {
	__typename?: 'HeroImageEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: HeroImage;
};

/** Identifies documents */
export type HeroImageManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<HeroImageWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<HeroImageWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<HeroImageWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	icon?: InputMaybe<AssetWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	image?: InputMaybe<AssetWhereInput>;
	page?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum HeroImageOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type HeroImageUpdateInput = {
	icon?: InputMaybe<AssetUpdateOneInlineInput>;
	image?: InputMaybe<AssetUpdateOneInlineInput>;
	page?: InputMaybe<PageUpdateOneInlineInput>;
	strokeColor?: InputMaybe<ColorInput>;
};

export type HeroImageUpdateManyInlineInput = {
	/** Connect multiple existing HeroImage documents */
	connect?: InputMaybe<Array<HeroImageConnectInput>>;
	/** Create and connect multiple HeroImage documents */
	create?: InputMaybe<Array<HeroImageCreateInput>>;
	/** Delete multiple HeroImage documents */
	delete?: InputMaybe<Array<HeroImageWhereUniqueInput>>;
	/** Disconnect multiple HeroImage documents */
	disconnect?: InputMaybe<Array<HeroImageWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing HeroImage documents */
	set?: InputMaybe<Array<HeroImageWhereUniqueInput>>;
	/** Update multiple HeroImage documents */
	update?: InputMaybe<Array<HeroImageUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple HeroImage documents */
	upsert?: InputMaybe<Array<HeroImageUpsertWithNestedWhereUniqueInput>>;
};

export type HeroImageUpdateManyInput = {
	strokeColor?: InputMaybe<ColorInput>;
};

export type HeroImageUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: HeroImageUpdateManyInput;
	/** Document search */
	where: HeroImageWhereInput;
};

export type HeroImageUpdateOneInlineInput = {
	/** Connect existing HeroImage document */
	connect?: InputMaybe<HeroImageWhereUniqueInput>;
	/** Create and connect one HeroImage document */
	create?: InputMaybe<HeroImageCreateInput>;
	/** Delete currently connected HeroImage document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected HeroImage document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single HeroImage document */
	update?: InputMaybe<HeroImageUpdateWithNestedWhereUniqueInput>;
	/** Upsert single HeroImage document */
	upsert?: InputMaybe<HeroImageUpsertWithNestedWhereUniqueInput>;
};

export type HeroImageUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: HeroImageUpdateInput;
	/** Unique document search */
	where: HeroImageWhereUniqueInput;
};

export type HeroImageUpsertInput = {
	/** Create document if it didn't exist */
	create: HeroImageCreateInput;
	/** Update document if it exists */
	update: HeroImageUpdateInput;
};

export type HeroImageUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: HeroImageUpsertInput;
	/** Unique document search */
	where: HeroImageWhereUniqueInput;
};

/** Identifies documents */
export type HeroImageWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<HeroImageWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<HeroImageWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<HeroImageWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	icon?: InputMaybe<AssetWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	image?: InputMaybe<AssetWhereInput>;
	page?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References HeroImage record uniquely */
export type HeroImageWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
};

export type Image = Node & {
	__typename?: 'Image';
	blogPost?: Maybe<BlogPost>;
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Get the document in other stages */
	documentInStages: Array<Image>;
	/** List of Image versions */
	history: Array<Version>;
	/** The unique identifier */
	id: Scalars['ID'];
	image?: Maybe<Asset>;
	imageWidth?: Maybe<ImageWidth>;
	paddingBottom?: Maybe<Padding>;
	paddingTop?: Maybe<Padding>;
	page?: Maybe<Page>;
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	scheduledIn: Array<ScheduledOperation>;
	/** System stage field */
	stage: Stage;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

export type ImageBlogPostArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ImageCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ImageDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

export type ImageHistoryArgs = {
	limit?: Scalars['Int'];
	skip?: Scalars['Int'];
	stageOverride?: InputMaybe<Stage>;
};

export type ImageImageArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ImagePageArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ImagePublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ImageScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ImageUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ImageConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ImageWhereUniqueInput;
};

/** A connection to a list of items. */
export type ImageConnection = {
	__typename?: 'ImageConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<ImageEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type ImageCreateInput = {
	blogPost?: InputMaybe<BlogPostCreateOneInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	image?: InputMaybe<AssetCreateOneInlineInput>;
	imageWidth?: InputMaybe<ImageWidth>;
	paddingBottom?: InputMaybe<Padding>;
	paddingTop?: InputMaybe<Padding>;
	page?: InputMaybe<PageCreateOneInlineInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ImageCreateManyInlineInput = {
	/** Connect multiple existing Image documents */
	connect?: InputMaybe<Array<ImageWhereUniqueInput>>;
	/** Create and connect multiple existing Image documents */
	create?: InputMaybe<Array<ImageCreateInput>>;
};

export type ImageCreateOneInlineInput = {
	/** Connect one existing Image document */
	connect?: InputMaybe<ImageWhereUniqueInput>;
	/** Create and connect one Image document */
	create?: InputMaybe<ImageCreateInput>;
};

/** An edge in a connection. */
export type ImageEdge = {
	__typename?: 'ImageEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: Image;
};

export enum ImageFit {
	/** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
	Clip = 'clip',
	/** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
	Crop = 'crop',
	/** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
	Max = 'max',
	/** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
	Scale = 'scale'
}

/** Identifies documents */
export type ImageManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ImageWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ImageWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ImageWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	blogPost?: InputMaybe<BlogPostWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	image?: InputMaybe<AssetWhereInput>;
	imageWidth?: InputMaybe<ImageWidth>;
	/** All values that are contained in given list. */
	imageWidth_in?: InputMaybe<Array<ImageWidth>>;
	/** All values that are not equal to given value. */
	imageWidth_not?: InputMaybe<ImageWidth>;
	/** All values that are not contained in given list. */
	imageWidth_not_in?: InputMaybe<Array<ImageWidth>>;
	paddingBottom?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	paddingBottom_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	paddingBottom_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	paddingBottom_not_in?: InputMaybe<Array<Padding>>;
	paddingTop?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	paddingTop_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	paddingTop_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	paddingTop_not_in?: InputMaybe<Array<Padding>>;
	page?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ImageOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	ImageWidthAsc = 'imageWidth_ASC',
	ImageWidthDesc = 'imageWidth_DESC',
	PaddingBottomAsc = 'paddingBottom_ASC',
	PaddingBottomDesc = 'paddingBottom_DESC',
	PaddingTopAsc = 'paddingTop_ASC',
	PaddingTopDesc = 'paddingTop_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type ImageResizeInput = {
	/** The default value for the fit parameter is fit:clip. */
	fit?: InputMaybe<ImageFit>;
	/** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
	height?: InputMaybe<Scalars['Int']>;
	/** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
	width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
	/** Resizes the image */
	resize?: InputMaybe<ImageResizeInput>;
};

export type ImageUpdateInput = {
	blogPost?: InputMaybe<BlogPostUpdateOneInlineInput>;
	image?: InputMaybe<AssetUpdateOneInlineInput>;
	imageWidth?: InputMaybe<ImageWidth>;
	paddingBottom?: InputMaybe<Padding>;
	paddingTop?: InputMaybe<Padding>;
	page?: InputMaybe<PageUpdateOneInlineInput>;
};

export type ImageUpdateManyInlineInput = {
	/** Connect multiple existing Image documents */
	connect?: InputMaybe<Array<ImageConnectInput>>;
	/** Create and connect multiple Image documents */
	create?: InputMaybe<Array<ImageCreateInput>>;
	/** Delete multiple Image documents */
	delete?: InputMaybe<Array<ImageWhereUniqueInput>>;
	/** Disconnect multiple Image documents */
	disconnect?: InputMaybe<Array<ImageWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Image documents */
	set?: InputMaybe<Array<ImageWhereUniqueInput>>;
	/** Update multiple Image documents */
	update?: InputMaybe<Array<ImageUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Image documents */
	upsert?: InputMaybe<Array<ImageUpsertWithNestedWhereUniqueInput>>;
};

export type ImageUpdateManyInput = {
	imageWidth?: InputMaybe<ImageWidth>;
	paddingBottom?: InputMaybe<Padding>;
	paddingTop?: InputMaybe<Padding>;
};

export type ImageUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: ImageUpdateManyInput;
	/** Document search */
	where: ImageWhereInput;
};

export type ImageUpdateOneInlineInput = {
	/** Connect existing Image document */
	connect?: InputMaybe<ImageWhereUniqueInput>;
	/** Create and connect one Image document */
	create?: InputMaybe<ImageCreateInput>;
	/** Delete currently connected Image document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected Image document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single Image document */
	update?: InputMaybe<ImageUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Image document */
	upsert?: InputMaybe<ImageUpsertWithNestedWhereUniqueInput>;
};

export type ImageUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: ImageUpdateInput;
	/** Unique document search */
	where: ImageWhereUniqueInput;
};

export type ImageUpsertInput = {
	/** Create document if it didn't exist */
	create: ImageCreateInput;
	/** Update document if it exists */
	update: ImageUpdateInput;
};

export type ImageUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: ImageUpsertInput;
	/** Unique document search */
	where: ImageWhereUniqueInput;
};

/** Identifies documents */
export type ImageWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ImageWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ImageWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ImageWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	blogPost?: InputMaybe<BlogPostWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	image?: InputMaybe<AssetWhereInput>;
	imageWidth?: InputMaybe<ImageWidth>;
	/** All values that are contained in given list. */
	imageWidth_in?: InputMaybe<Array<ImageWidth>>;
	/** All values that are not equal to given value. */
	imageWidth_not?: InputMaybe<ImageWidth>;
	/** All values that are not contained in given list. */
	imageWidth_not_in?: InputMaybe<Array<ImageWidth>>;
	paddingBottom?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	paddingBottom_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	paddingBottom_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	paddingBottom_not_in?: InputMaybe<Array<Padding>>;
	paddingTop?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	paddingTop_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	paddingTop_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	paddingTop_not_in?: InputMaybe<Array<Padding>>;
	page?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Image record uniquely */
export type ImageWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
};

export enum ImageWidth {
	ContentWidth = 'ContentWidth',
	FullWidth = 'FullWidth',
	Pattern = 'Pattern'
}

export type Link = Node & {
	__typename?: 'Link';
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Get the document in other stages */
	documentInStages: Array<Link>;
	/** List of Link versions */
	history: Array<Version>;
	/** The unique identifier */
	id: Scalars['ID'];
	label?: Maybe<Scalars['String']>;
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	scheduledIn: Array<ScheduledOperation>;
	/** System stage field */
	stage: Stage;
	target?: Maybe<LinkTarget>;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

export type LinkCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type LinkDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

export type LinkHistoryArgs = {
	limit?: Scalars['Int'];
	skip?: Scalars['Int'];
	stageOverride?: InputMaybe<Stage>;
};

export type LinkPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type LinkScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type LinkTargetArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type LinkUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type LinkConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: LinkWhereUniqueInput;
};

/** A connection to a list of items. */
export type LinkConnection = {
	__typename?: 'LinkConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<LinkEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type LinkCreateInput = {
	ckx8urpys01qg01z6hntc2w45?: InputMaybe<CardImageCreateManyInlineInput>;
	ckx8uschu02xj01zc71rq5bxw?: InputMaybe<CardIconCreateManyInlineInput>;
	ckxj50hw42v6x01xpgtk195ql?: InputMaybe<TextCreateManyInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	label?: InputMaybe<Scalars['String']>;
	target?: InputMaybe<LinkTargetCreateOneInlineInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LinkCreateManyInlineInput = {
	/** Connect multiple existing Link documents */
	connect?: InputMaybe<Array<LinkWhereUniqueInput>>;
	/** Create and connect multiple existing Link documents */
	create?: InputMaybe<Array<LinkCreateInput>>;
};

export type LinkCreateOneInlineInput = {
	/** Connect one existing Link document */
	connect?: InputMaybe<LinkWhereUniqueInput>;
	/** Create and connect one Link document */
	create?: InputMaybe<LinkCreateInput>;
};

/** An edge in a connection. */
export type LinkEdge = {
	__typename?: 'LinkEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: Link;
};

/** Identifies documents */
export type LinkManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<LinkWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<LinkWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<LinkWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	label?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	label_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	label_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	label_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	label_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	label_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	label_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	label_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	label_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	label_starts_with?: InputMaybe<Scalars['String']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum LinkOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	LabelAsc = 'label_ASC',
	LabelDesc = 'label_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type LinkTarget = BlogPost | Page;

export type LinkTargetConnectInput = {
	BlogPost?: InputMaybe<BlogPostConnectInput>;
	Page?: InputMaybe<PageConnectInput>;
};

export type LinkTargetCreateInput = {
	BlogPost?: InputMaybe<BlogPostCreateInput>;
	Page?: InputMaybe<PageCreateInput>;
};

export type LinkTargetCreateManyInlineInput = {
	/** Connect multiple existing LinkTarget documents */
	connect?: InputMaybe<Array<LinkTargetWhereUniqueInput>>;
	/** Create and connect multiple existing LinkTarget documents */
	create?: InputMaybe<Array<LinkTargetCreateInput>>;
};

export type LinkTargetCreateOneInlineInput = {
	/** Connect one existing LinkTarget document */
	connect?: InputMaybe<LinkTargetWhereUniqueInput>;
	/** Create and connect one LinkTarget document */
	create?: InputMaybe<LinkTargetCreateInput>;
};

export type LinkTargetUpdateInput = {
	BlogPost?: InputMaybe<BlogPostUpdateInput>;
	Page?: InputMaybe<PageUpdateInput>;
};

export type LinkTargetUpdateManyInlineInput = {
	/** Connect multiple existing LinkTarget documents */
	connect?: InputMaybe<Array<LinkTargetConnectInput>>;
	/** Create and connect multiple LinkTarget documents */
	create?: InputMaybe<Array<LinkTargetCreateInput>>;
	/** Delete multiple LinkTarget documents */
	delete?: InputMaybe<Array<LinkTargetWhereUniqueInput>>;
	/** Disconnect multiple LinkTarget documents */
	disconnect?: InputMaybe<Array<LinkTargetWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing LinkTarget documents */
	set?: InputMaybe<Array<LinkTargetWhereUniqueInput>>;
	/** Update multiple LinkTarget documents */
	update?: InputMaybe<Array<LinkTargetUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple LinkTarget documents */
	upsert?: InputMaybe<Array<LinkTargetUpsertWithNestedWhereUniqueInput>>;
};

export type LinkTargetUpdateManyWithNestedWhereInput = {
	BlogPost?: InputMaybe<BlogPostUpdateManyWithNestedWhereInput>;
	Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>;
};

export type LinkTargetUpdateOneInlineInput = {
	/** Connect existing LinkTarget document */
	connect?: InputMaybe<LinkTargetWhereUniqueInput>;
	/** Create and connect one LinkTarget document */
	create?: InputMaybe<LinkTargetCreateInput>;
	/** Delete currently connected LinkTarget document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected LinkTarget document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single LinkTarget document */
	update?: InputMaybe<LinkTargetUpdateWithNestedWhereUniqueInput>;
	/** Upsert single LinkTarget document */
	upsert?: InputMaybe<LinkTargetUpsertWithNestedWhereUniqueInput>;
};

export type LinkTargetUpdateWithNestedWhereUniqueInput = {
	BlogPost?: InputMaybe<BlogPostUpdateWithNestedWhereUniqueInput>;
	Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
};

export type LinkTargetUpsertWithNestedWhereUniqueInput = {
	BlogPost?: InputMaybe<BlogPostUpsertWithNestedWhereUniqueInput>;
	Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type LinkTargetWhereInput = {
	BlogPost?: InputMaybe<BlogPostWhereInput>;
	Page?: InputMaybe<PageWhereInput>;
};

export type LinkTargetWhereUniqueInput = {
	BlogPost?: InputMaybe<BlogPostWhereUniqueInput>;
	Page?: InputMaybe<PageWhereUniqueInput>;
};

export type LinkUpdateInput = {
	ckx8urpys01qg01z6hntc2w45?: InputMaybe<CardImageUpdateManyInlineInput>;
	ckx8uschu02xj01zc71rq5bxw?: InputMaybe<CardIconUpdateManyInlineInput>;
	ckxj50hw42v6x01xpgtk195ql?: InputMaybe<TextUpdateManyInlineInput>;
	label?: InputMaybe<Scalars['String']>;
	target?: InputMaybe<LinkTargetUpdateOneInlineInput>;
};

export type LinkUpdateManyInlineInput = {
	/** Connect multiple existing Link documents */
	connect?: InputMaybe<Array<LinkConnectInput>>;
	/** Create and connect multiple Link documents */
	create?: InputMaybe<Array<LinkCreateInput>>;
	/** Delete multiple Link documents */
	delete?: InputMaybe<Array<LinkWhereUniqueInput>>;
	/** Disconnect multiple Link documents */
	disconnect?: InputMaybe<Array<LinkWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Link documents */
	set?: InputMaybe<Array<LinkWhereUniqueInput>>;
	/** Update multiple Link documents */
	update?: InputMaybe<Array<LinkUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Link documents */
	upsert?: InputMaybe<Array<LinkUpsertWithNestedWhereUniqueInput>>;
};

export type LinkUpdateManyInput = {
	label?: InputMaybe<Scalars['String']>;
};

export type LinkUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: LinkUpdateManyInput;
	/** Document search */
	where: LinkWhereInput;
};

export type LinkUpdateOneInlineInput = {
	/** Connect existing Link document */
	connect?: InputMaybe<LinkWhereUniqueInput>;
	/** Create and connect one Link document */
	create?: InputMaybe<LinkCreateInput>;
	/** Delete currently connected Link document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected Link document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single Link document */
	update?: InputMaybe<LinkUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Link document */
	upsert?: InputMaybe<LinkUpsertWithNestedWhereUniqueInput>;
};

export type LinkUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: LinkUpdateInput;
	/** Unique document search */
	where: LinkWhereUniqueInput;
};

export type LinkUpsertInput = {
	/** Create document if it didn't exist */
	create: LinkCreateInput;
	/** Update document if it exists */
	update: LinkUpdateInput;
};

export type LinkUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: LinkUpsertInput;
	/** Unique document search */
	where: LinkWhereUniqueInput;
};

/** Identifies documents */
export type LinkWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<LinkWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<LinkWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<LinkWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	label?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	label_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	label_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	label_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	label_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	label_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	label_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	label_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	label_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	label_starts_with?: InputMaybe<Scalars['String']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Link record uniquely */
export type LinkWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
};

/** Locale system enumeration */
export enum Locale {
	/** System locale */
	En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
	__typename?: 'Location';
	distance: Scalars['Float'];
	latitude: Scalars['Float'];
	longitude: Scalars['Float'];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
	from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
	latitude: Scalars['Float'];
	longitude: Scalars['Float'];
};

export type Mutation = {
	__typename?: 'Mutation';
	/** Create one accordionContainer */
	createAccordionContainer?: Maybe<AccordionContainer>;
	/** Create one accordionItem */
	createAccordionItem?: Maybe<AccordionItem>;
	/**
	 * Create one asset
	 * @deprecated Asset mutations will be overhauled soon
	 */
	createAsset?: Maybe<Asset>;
	/** Create one assetLink */
	createAssetLink?: Maybe<AssetLink>;
	/** Create one blogPost */
	createBlogPost?: Maybe<BlogPost>;
	/** Create one cardIcon */
	createCardIcon?: Maybe<CardIcon>;
	/** Create one cardImage */
	createCardImage?: Maybe<CardImage>;
	/** Create one cardsContainer */
	createCardsContainer?: Maybe<CardsContainer>;
	/** Create one ctaLink */
	createCtaLink?: Maybe<CtaLink>;
	/** Create one divider */
	createDivider?: Maybe<Divider>;
	/** Create one eyecatcher */
	createEyecatcher?: Maybe<Eyecatcher>;
	/** Create one heroImage */
	createHeroImage?: Maybe<HeroImage>;
	/** Create one image */
	createImage?: Maybe<Image>;
	/** Create one link */
	createLink?: Maybe<Link>;
	/** Create one page */
	createPage?: Maybe<Page>;
	/** Create one referencesContainer */
	createReferencesContainer?: Maybe<ReferencesContainer>;
	/** Create one referencesItem */
	createReferencesItem?: Maybe<ReferencesItem>;
	/** Create one scheduledRelease */
	createScheduledRelease?: Maybe<ScheduledRelease>;
	/** Create one text */
	createText?: Maybe<Text>;
	/** Delete one accordionContainer from _all_ existing stages. Returns deleted document. */
	deleteAccordionContainer?: Maybe<AccordionContainer>;
	/** Delete one accordionItem from _all_ existing stages. Returns deleted document. */
	deleteAccordionItem?: Maybe<AccordionItem>;
	/** Delete one asset from _all_ existing stages. Returns deleted document. */
	deleteAsset?: Maybe<Asset>;
	/** Delete one assetLink from _all_ existing stages. Returns deleted document. */
	deleteAssetLink?: Maybe<AssetLink>;
	/** Delete one blogPost from _all_ existing stages. Returns deleted document. */
	deleteBlogPost?: Maybe<BlogPost>;
	/** Delete one cardIcon from _all_ existing stages. Returns deleted document. */
	deleteCardIcon?: Maybe<CardIcon>;
	/** Delete one cardImage from _all_ existing stages. Returns deleted document. */
	deleteCardImage?: Maybe<CardImage>;
	/** Delete one cardsContainer from _all_ existing stages. Returns deleted document. */
	deleteCardsContainer?: Maybe<CardsContainer>;
	/** Delete one ctaLink from _all_ existing stages. Returns deleted document. */
	deleteCtaLink?: Maybe<CtaLink>;
	/** Delete one divider from _all_ existing stages. Returns deleted document. */
	deleteDivider?: Maybe<Divider>;
	/** Delete one eyecatcher from _all_ existing stages. Returns deleted document. */
	deleteEyecatcher?: Maybe<Eyecatcher>;
	/** Delete one heroImage from _all_ existing stages. Returns deleted document. */
	deleteHeroImage?: Maybe<HeroImage>;
	/** Delete one image from _all_ existing stages. Returns deleted document. */
	deleteImage?: Maybe<Image>;
	/** Delete one link from _all_ existing stages. Returns deleted document. */
	deleteLink?: Maybe<Link>;
	/**
	 * Delete many AccordionContainer documents
	 * @deprecated Please use the new paginated many mutation (deleteManyAccordionContainersConnection)
	 */
	deleteManyAccordionContainers: BatchPayload;
	/** Delete many AccordionContainer documents, return deleted documents */
	deleteManyAccordionContainersConnection: AccordionContainerConnection;
	/**
	 * Delete many AccordionItem documents
	 * @deprecated Please use the new paginated many mutation (deleteManyAccordionItemsConnection)
	 */
	deleteManyAccordionItems: BatchPayload;
	/** Delete many AccordionItem documents, return deleted documents */
	deleteManyAccordionItemsConnection: AccordionItemConnection;
	/**
	 * Delete many AssetLink documents
	 * @deprecated Please use the new paginated many mutation (deleteManyAssetLinksConnection)
	 */
	deleteManyAssetLinks: BatchPayload;
	/** Delete many AssetLink documents, return deleted documents */
	deleteManyAssetLinksConnection: AssetLinkConnection;
	/**
	 * Delete many Asset documents
	 * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
	 */
	deleteManyAssets: BatchPayload;
	/** Delete many Asset documents, return deleted documents */
	deleteManyAssetsConnection: AssetConnection;
	/**
	 * Delete many BlogPost documents
	 * @deprecated Please use the new paginated many mutation (deleteManyBlogPostsConnection)
	 */
	deleteManyBlogPosts: BatchPayload;
	/** Delete many BlogPost documents, return deleted documents */
	deleteManyBlogPostsConnection: BlogPostConnection;
	/**
	 * Delete many CardIcon documents
	 * @deprecated Please use the new paginated many mutation (deleteManyCardIconsConnection)
	 */
	deleteManyCardIcons: BatchPayload;
	/** Delete many CardIcon documents, return deleted documents */
	deleteManyCardIconsConnection: CardIconConnection;
	/**
	 * Delete many CardImage documents
	 * @deprecated Please use the new paginated many mutation (deleteManyCardImagesConnection)
	 */
	deleteManyCardImages: BatchPayload;
	/** Delete many CardImage documents, return deleted documents */
	deleteManyCardImagesConnection: CardImageConnection;
	/**
	 * Delete many CardsContainer documents
	 * @deprecated Please use the new paginated many mutation (deleteManyCardsContainersConnection)
	 */
	deleteManyCardsContainers: BatchPayload;
	/** Delete many CardsContainer documents, return deleted documents */
	deleteManyCardsContainersConnection: CardsContainerConnection;
	/**
	 * Delete many CtaLink documents
	 * @deprecated Please use the new paginated many mutation (deleteManyCtaLinksConnection)
	 */
	deleteManyCtaLinks: BatchPayload;
	/** Delete many CtaLink documents, return deleted documents */
	deleteManyCtaLinksConnection: CtaLinkConnection;
	/**
	 * Delete many Divider documents
	 * @deprecated Please use the new paginated many mutation (deleteManyDividersConnection)
	 */
	deleteManyDividers: BatchPayload;
	/** Delete many Divider documents, return deleted documents */
	deleteManyDividersConnection: DividerConnection;
	/**
	 * Delete many Eyecatcher documents
	 * @deprecated Please use the new paginated many mutation (deleteManyEyecatchersConnection)
	 */
	deleteManyEyecatchers: BatchPayload;
	/** Delete many Eyecatcher documents, return deleted documents */
	deleteManyEyecatchersConnection: EyecatcherConnection;
	/**
	 * Delete many HeroImage documents
	 * @deprecated Please use the new paginated many mutation (deleteManyHeroImagesConnection)
	 */
	deleteManyHeroImages: BatchPayload;
	/** Delete many HeroImage documents, return deleted documents */
	deleteManyHeroImagesConnection: HeroImageConnection;
	/**
	 * Delete many Image documents
	 * @deprecated Please use the new paginated many mutation (deleteManyImagesConnection)
	 */
	deleteManyImages: BatchPayload;
	/** Delete many Image documents, return deleted documents */
	deleteManyImagesConnection: ImageConnection;
	/**
	 * Delete many Link documents
	 * @deprecated Please use the new paginated many mutation (deleteManyLinksConnection)
	 */
	deleteManyLinks: BatchPayload;
	/** Delete many Link documents, return deleted documents */
	deleteManyLinksConnection: LinkConnection;
	/**
	 * Delete many Page documents
	 * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
	 */
	deleteManyPages: BatchPayload;
	/** Delete many Page documents, return deleted documents */
	deleteManyPagesConnection: PageConnection;
	/**
	 * Delete many ReferencesContainer documents
	 * @deprecated Please use the new paginated many mutation (deleteManyReferencesContainersConnection)
	 */
	deleteManyReferencesContainers: BatchPayload;
	/** Delete many ReferencesContainer documents, return deleted documents */
	deleteManyReferencesContainersConnection: ReferencesContainerConnection;
	/**
	 * Delete many ReferencesItem documents
	 * @deprecated Please use the new paginated many mutation (deleteManyReferencesItemsConnection)
	 */
	deleteManyReferencesItems: BatchPayload;
	/** Delete many ReferencesItem documents, return deleted documents */
	deleteManyReferencesItemsConnection: ReferencesItemConnection;
	/**
	 * Delete many Text documents
	 * @deprecated Please use the new paginated many mutation (deleteManyTextsConnection)
	 */
	deleteManyTexts: BatchPayload;
	/** Delete many Text documents, return deleted documents */
	deleteManyTextsConnection: TextConnection;
	/** Delete one page from _all_ existing stages. Returns deleted document. */
	deletePage?: Maybe<Page>;
	/** Delete one referencesContainer from _all_ existing stages. Returns deleted document. */
	deleteReferencesContainer?: Maybe<ReferencesContainer>;
	/** Delete one referencesItem from _all_ existing stages. Returns deleted document. */
	deleteReferencesItem?: Maybe<ReferencesItem>;
	/** Delete and return scheduled operation */
	deleteScheduledOperation?: Maybe<ScheduledOperation>;
	/** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
	deleteScheduledRelease?: Maybe<ScheduledRelease>;
	/** Delete one text from _all_ existing stages. Returns deleted document. */
	deleteText?: Maybe<Text>;
	/** Publish one accordionContainer */
	publishAccordionContainer?: Maybe<AccordionContainer>;
	/** Publish one accordionItem */
	publishAccordionItem?: Maybe<AccordionItem>;
	/** Publish one asset */
	publishAsset?: Maybe<Asset>;
	/** Publish one assetLink */
	publishAssetLink?: Maybe<AssetLink>;
	/** Publish one blogPost */
	publishBlogPost?: Maybe<BlogPost>;
	/** Publish one cardIcon */
	publishCardIcon?: Maybe<CardIcon>;
	/** Publish one cardImage */
	publishCardImage?: Maybe<CardImage>;
	/** Publish one cardsContainer */
	publishCardsContainer?: Maybe<CardsContainer>;
	/** Publish one ctaLink */
	publishCtaLink?: Maybe<CtaLink>;
	/** Publish one divider */
	publishDivider?: Maybe<Divider>;
	/** Publish one eyecatcher */
	publishEyecatcher?: Maybe<Eyecatcher>;
	/** Publish one heroImage */
	publishHeroImage?: Maybe<HeroImage>;
	/** Publish one image */
	publishImage?: Maybe<Image>;
	/** Publish one link */
	publishLink?: Maybe<Link>;
	/**
	 * Publish many AccordionContainer documents
	 * @deprecated Please use the new paginated many mutation (publishManyAccordionContainersConnection)
	 */
	publishManyAccordionContainers: BatchPayload;
	/** Publish many AccordionContainer documents */
	publishManyAccordionContainersConnection: AccordionContainerConnection;
	/**
	 * Publish many AccordionItem documents
	 * @deprecated Please use the new paginated many mutation (publishManyAccordionItemsConnection)
	 */
	publishManyAccordionItems: BatchPayload;
	/** Publish many AccordionItem documents */
	publishManyAccordionItemsConnection: AccordionItemConnection;
	/**
	 * Publish many AssetLink documents
	 * @deprecated Please use the new paginated many mutation (publishManyAssetLinksConnection)
	 */
	publishManyAssetLinks: BatchPayload;
	/** Publish many AssetLink documents */
	publishManyAssetLinksConnection: AssetLinkConnection;
	/**
	 * Publish many Asset documents
	 * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
	 */
	publishManyAssets: BatchPayload;
	/** Publish many Asset documents */
	publishManyAssetsConnection: AssetConnection;
	/**
	 * Publish many BlogPost documents
	 * @deprecated Please use the new paginated many mutation (publishManyBlogPostsConnection)
	 */
	publishManyBlogPosts: BatchPayload;
	/** Publish many BlogPost documents */
	publishManyBlogPostsConnection: BlogPostConnection;
	/**
	 * Publish many CardIcon documents
	 * @deprecated Please use the new paginated many mutation (publishManyCardIconsConnection)
	 */
	publishManyCardIcons: BatchPayload;
	/** Publish many CardIcon documents */
	publishManyCardIconsConnection: CardIconConnection;
	/**
	 * Publish many CardImage documents
	 * @deprecated Please use the new paginated many mutation (publishManyCardImagesConnection)
	 */
	publishManyCardImages: BatchPayload;
	/** Publish many CardImage documents */
	publishManyCardImagesConnection: CardImageConnection;
	/**
	 * Publish many CardsContainer documents
	 * @deprecated Please use the new paginated many mutation (publishManyCardsContainersConnection)
	 */
	publishManyCardsContainers: BatchPayload;
	/** Publish many CardsContainer documents */
	publishManyCardsContainersConnection: CardsContainerConnection;
	/**
	 * Publish many CtaLink documents
	 * @deprecated Please use the new paginated many mutation (publishManyCtaLinksConnection)
	 */
	publishManyCtaLinks: BatchPayload;
	/** Publish many CtaLink documents */
	publishManyCtaLinksConnection: CtaLinkConnection;
	/**
	 * Publish many Divider documents
	 * @deprecated Please use the new paginated many mutation (publishManyDividersConnection)
	 */
	publishManyDividers: BatchPayload;
	/** Publish many Divider documents */
	publishManyDividersConnection: DividerConnection;
	/**
	 * Publish many Eyecatcher documents
	 * @deprecated Please use the new paginated many mutation (publishManyEyecatchersConnection)
	 */
	publishManyEyecatchers: BatchPayload;
	/** Publish many Eyecatcher documents */
	publishManyEyecatchersConnection: EyecatcherConnection;
	/**
	 * Publish many HeroImage documents
	 * @deprecated Please use the new paginated many mutation (publishManyHeroImagesConnection)
	 */
	publishManyHeroImages: BatchPayload;
	/** Publish many HeroImage documents */
	publishManyHeroImagesConnection: HeroImageConnection;
	/**
	 * Publish many Image documents
	 * @deprecated Please use the new paginated many mutation (publishManyImagesConnection)
	 */
	publishManyImages: BatchPayload;
	/** Publish many Image documents */
	publishManyImagesConnection: ImageConnection;
	/**
	 * Publish many Link documents
	 * @deprecated Please use the new paginated many mutation (publishManyLinksConnection)
	 */
	publishManyLinks: BatchPayload;
	/** Publish many Link documents */
	publishManyLinksConnection: LinkConnection;
	/**
	 * Publish many Page documents
	 * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
	 */
	publishManyPages: BatchPayload;
	/** Publish many Page documents */
	publishManyPagesConnection: PageConnection;
	/**
	 * Publish many ReferencesContainer documents
	 * @deprecated Please use the new paginated many mutation (publishManyReferencesContainersConnection)
	 */
	publishManyReferencesContainers: BatchPayload;
	/** Publish many ReferencesContainer documents */
	publishManyReferencesContainersConnection: ReferencesContainerConnection;
	/**
	 * Publish many ReferencesItem documents
	 * @deprecated Please use the new paginated many mutation (publishManyReferencesItemsConnection)
	 */
	publishManyReferencesItems: BatchPayload;
	/** Publish many ReferencesItem documents */
	publishManyReferencesItemsConnection: ReferencesItemConnection;
	/**
	 * Publish many Text documents
	 * @deprecated Please use the new paginated many mutation (publishManyTextsConnection)
	 */
	publishManyTexts: BatchPayload;
	/** Publish many Text documents */
	publishManyTextsConnection: TextConnection;
	/** Publish one page */
	publishPage?: Maybe<Page>;
	/** Publish one referencesContainer */
	publishReferencesContainer?: Maybe<ReferencesContainer>;
	/** Publish one referencesItem */
	publishReferencesItem?: Maybe<ReferencesItem>;
	/** Publish one text */
	publishText?: Maybe<Text>;
	/** Schedule to publish one accordionContainer */
	schedulePublishAccordionContainer?: Maybe<AccordionContainer>;
	/** Schedule to publish one accordionItem */
	schedulePublishAccordionItem?: Maybe<AccordionItem>;
	/** Schedule to publish one asset */
	schedulePublishAsset?: Maybe<Asset>;
	/** Schedule to publish one assetLink */
	schedulePublishAssetLink?: Maybe<AssetLink>;
	/** Schedule to publish one blogPost */
	schedulePublishBlogPost?: Maybe<BlogPost>;
	/** Schedule to publish one cardIcon */
	schedulePublishCardIcon?: Maybe<CardIcon>;
	/** Schedule to publish one cardImage */
	schedulePublishCardImage?: Maybe<CardImage>;
	/** Schedule to publish one cardsContainer */
	schedulePublishCardsContainer?: Maybe<CardsContainer>;
	/** Schedule to publish one ctaLink */
	schedulePublishCtaLink?: Maybe<CtaLink>;
	/** Schedule to publish one divider */
	schedulePublishDivider?: Maybe<Divider>;
	/** Schedule to publish one eyecatcher */
	schedulePublishEyecatcher?: Maybe<Eyecatcher>;
	/** Schedule to publish one heroImage */
	schedulePublishHeroImage?: Maybe<HeroImage>;
	/** Schedule to publish one image */
	schedulePublishImage?: Maybe<Image>;
	/** Schedule to publish one link */
	schedulePublishLink?: Maybe<Link>;
	/** Schedule to publish one page */
	schedulePublishPage?: Maybe<Page>;
	/** Schedule to publish one referencesContainer */
	schedulePublishReferencesContainer?: Maybe<ReferencesContainer>;
	/** Schedule to publish one referencesItem */
	schedulePublishReferencesItem?: Maybe<ReferencesItem>;
	/** Schedule to publish one text */
	schedulePublishText?: Maybe<Text>;
	/** Unpublish one accordionContainer from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishAccordionContainer?: Maybe<AccordionContainer>;
	/** Unpublish one accordionItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishAccordionItem?: Maybe<AccordionItem>;
	/** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishAsset?: Maybe<Asset>;
	/** Unpublish one assetLink from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishAssetLink?: Maybe<AssetLink>;
	/** Unpublish one blogPost from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishBlogPost?: Maybe<BlogPost>;
	/** Unpublish one cardIcon from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishCardIcon?: Maybe<CardIcon>;
	/** Unpublish one cardImage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishCardImage?: Maybe<CardImage>;
	/** Unpublish one cardsContainer from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishCardsContainer?: Maybe<CardsContainer>;
	/** Unpublish one ctaLink from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishCtaLink?: Maybe<CtaLink>;
	/** Unpublish one divider from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishDivider?: Maybe<Divider>;
	/** Unpublish one eyecatcher from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishEyecatcher?: Maybe<Eyecatcher>;
	/** Unpublish one heroImage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishHeroImage?: Maybe<HeroImage>;
	/** Unpublish one image from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishImage?: Maybe<Image>;
	/** Unpublish one link from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishLink?: Maybe<Link>;
	/** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishPage?: Maybe<Page>;
	/** Unpublish one referencesContainer from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishReferencesContainer?: Maybe<ReferencesContainer>;
	/** Unpublish one referencesItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishReferencesItem?: Maybe<ReferencesItem>;
	/** Unpublish one text from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishText?: Maybe<Text>;
	/** Unpublish one accordionContainer from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishAccordionContainer?: Maybe<AccordionContainer>;
	/** Unpublish one accordionItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishAccordionItem?: Maybe<AccordionItem>;
	/** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishAsset?: Maybe<Asset>;
	/** Unpublish one assetLink from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishAssetLink?: Maybe<AssetLink>;
	/** Unpublish one blogPost from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishBlogPost?: Maybe<BlogPost>;
	/** Unpublish one cardIcon from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishCardIcon?: Maybe<CardIcon>;
	/** Unpublish one cardImage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishCardImage?: Maybe<CardImage>;
	/** Unpublish one cardsContainer from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishCardsContainer?: Maybe<CardsContainer>;
	/** Unpublish one ctaLink from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishCtaLink?: Maybe<CtaLink>;
	/** Unpublish one divider from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishDivider?: Maybe<Divider>;
	/** Unpublish one eyecatcher from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishEyecatcher?: Maybe<Eyecatcher>;
	/** Unpublish one heroImage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishHeroImage?: Maybe<HeroImage>;
	/** Unpublish one image from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishImage?: Maybe<Image>;
	/** Unpublish one link from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishLink?: Maybe<Link>;
	/**
	 * Unpublish many AccordionContainer documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyAccordionContainersConnection)
	 */
	unpublishManyAccordionContainers: BatchPayload;
	/** Find many AccordionContainer documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyAccordionContainersConnection: AccordionContainerConnection;
	/**
	 * Unpublish many AccordionItem documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyAccordionItemsConnection)
	 */
	unpublishManyAccordionItems: BatchPayload;
	/** Find many AccordionItem documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyAccordionItemsConnection: AccordionItemConnection;
	/**
	 * Unpublish many AssetLink documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyAssetLinksConnection)
	 */
	unpublishManyAssetLinks: BatchPayload;
	/** Find many AssetLink documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyAssetLinksConnection: AssetLinkConnection;
	/**
	 * Unpublish many Asset documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
	 */
	unpublishManyAssets: BatchPayload;
	/** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyAssetsConnection: AssetConnection;
	/**
	 * Unpublish many BlogPost documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyBlogPostsConnection)
	 */
	unpublishManyBlogPosts: BatchPayload;
	/** Find many BlogPost documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyBlogPostsConnection: BlogPostConnection;
	/**
	 * Unpublish many CardIcon documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyCardIconsConnection)
	 */
	unpublishManyCardIcons: BatchPayload;
	/** Find many CardIcon documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyCardIconsConnection: CardIconConnection;
	/**
	 * Unpublish many CardImage documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyCardImagesConnection)
	 */
	unpublishManyCardImages: BatchPayload;
	/** Find many CardImage documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyCardImagesConnection: CardImageConnection;
	/**
	 * Unpublish many CardsContainer documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyCardsContainersConnection)
	 */
	unpublishManyCardsContainers: BatchPayload;
	/** Find many CardsContainer documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyCardsContainersConnection: CardsContainerConnection;
	/**
	 * Unpublish many CtaLink documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyCtaLinksConnection)
	 */
	unpublishManyCtaLinks: BatchPayload;
	/** Find many CtaLink documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyCtaLinksConnection: CtaLinkConnection;
	/**
	 * Unpublish many Divider documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyDividersConnection)
	 */
	unpublishManyDividers: BatchPayload;
	/** Find many Divider documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyDividersConnection: DividerConnection;
	/**
	 * Unpublish many Eyecatcher documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyEyecatchersConnection)
	 */
	unpublishManyEyecatchers: BatchPayload;
	/** Find many Eyecatcher documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyEyecatchersConnection: EyecatcherConnection;
	/**
	 * Unpublish many HeroImage documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyHeroImagesConnection)
	 */
	unpublishManyHeroImages: BatchPayload;
	/** Find many HeroImage documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyHeroImagesConnection: HeroImageConnection;
	/**
	 * Unpublish many Image documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyImagesConnection)
	 */
	unpublishManyImages: BatchPayload;
	/** Find many Image documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyImagesConnection: ImageConnection;
	/**
	 * Unpublish many Link documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyLinksConnection)
	 */
	unpublishManyLinks: BatchPayload;
	/** Find many Link documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyLinksConnection: LinkConnection;
	/**
	 * Unpublish many Page documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
	 */
	unpublishManyPages: BatchPayload;
	/** Find many Page documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyPagesConnection: PageConnection;
	/**
	 * Unpublish many ReferencesContainer documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyReferencesContainersConnection)
	 */
	unpublishManyReferencesContainers: BatchPayload;
	/** Find many ReferencesContainer documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyReferencesContainersConnection: ReferencesContainerConnection;
	/**
	 * Unpublish many ReferencesItem documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyReferencesItemsConnection)
	 */
	unpublishManyReferencesItems: BatchPayload;
	/** Find many ReferencesItem documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyReferencesItemsConnection: ReferencesItemConnection;
	/**
	 * Unpublish many Text documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyTextsConnection)
	 */
	unpublishManyTexts: BatchPayload;
	/** Find many Text documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyTextsConnection: TextConnection;
	/** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishPage?: Maybe<Page>;
	/** Unpublish one referencesContainer from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishReferencesContainer?: Maybe<ReferencesContainer>;
	/** Unpublish one referencesItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishReferencesItem?: Maybe<ReferencesItem>;
	/** Unpublish one text from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishText?: Maybe<Text>;
	/** Update one accordionContainer */
	updateAccordionContainer?: Maybe<AccordionContainer>;
	/** Update one accordionItem */
	updateAccordionItem?: Maybe<AccordionItem>;
	/** Update one asset */
	updateAsset?: Maybe<Asset>;
	/** Update one assetLink */
	updateAssetLink?: Maybe<AssetLink>;
	/** Update one blogPost */
	updateBlogPost?: Maybe<BlogPost>;
	/** Update one cardIcon */
	updateCardIcon?: Maybe<CardIcon>;
	/** Update one cardImage */
	updateCardImage?: Maybe<CardImage>;
	/** Update one cardsContainer */
	updateCardsContainer?: Maybe<CardsContainer>;
	/** Update one ctaLink */
	updateCtaLink?: Maybe<CtaLink>;
	/** Update one divider */
	updateDivider?: Maybe<Divider>;
	/** Update one eyecatcher */
	updateEyecatcher?: Maybe<Eyecatcher>;
	/** Update one heroImage */
	updateHeroImage?: Maybe<HeroImage>;
	/** Update one image */
	updateImage?: Maybe<Image>;
	/** Update one link */
	updateLink?: Maybe<Link>;
	/**
	 * Update many accordionContainers
	 * @deprecated Please use the new paginated many mutation (updateManyAccordionContainersConnection)
	 */
	updateManyAccordionContainers: BatchPayload;
	/** Update many AccordionContainer documents */
	updateManyAccordionContainersConnection: AccordionContainerConnection;
	/**
	 * Update many accordionItems
	 * @deprecated Please use the new paginated many mutation (updateManyAccordionItemsConnection)
	 */
	updateManyAccordionItems: BatchPayload;
	/** Update many AccordionItem documents */
	updateManyAccordionItemsConnection: AccordionItemConnection;
	/**
	 * Update many assetLinks
	 * @deprecated Please use the new paginated many mutation (updateManyAssetLinksConnection)
	 */
	updateManyAssetLinks: BatchPayload;
	/** Update many AssetLink documents */
	updateManyAssetLinksConnection: AssetLinkConnection;
	/**
	 * Update many assets
	 * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
	 */
	updateManyAssets: BatchPayload;
	/** Update many Asset documents */
	updateManyAssetsConnection: AssetConnection;
	/**
	 * Update many blogPosts
	 * @deprecated Please use the new paginated many mutation (updateManyBlogPostsConnection)
	 */
	updateManyBlogPosts: BatchPayload;
	/** Update many BlogPost documents */
	updateManyBlogPostsConnection: BlogPostConnection;
	/**
	 * Update many cardIcons
	 * @deprecated Please use the new paginated many mutation (updateManyCardIconsConnection)
	 */
	updateManyCardIcons: BatchPayload;
	/** Update many CardIcon documents */
	updateManyCardIconsConnection: CardIconConnection;
	/**
	 * Update many cardImages
	 * @deprecated Please use the new paginated many mutation (updateManyCardImagesConnection)
	 */
	updateManyCardImages: BatchPayload;
	/** Update many CardImage documents */
	updateManyCardImagesConnection: CardImageConnection;
	/**
	 * Update many cardsContainers
	 * @deprecated Please use the new paginated many mutation (updateManyCardsContainersConnection)
	 */
	updateManyCardsContainers: BatchPayload;
	/** Update many CardsContainer documents */
	updateManyCardsContainersConnection: CardsContainerConnection;
	/**
	 * Update many ctaLinks
	 * @deprecated Please use the new paginated many mutation (updateManyCtaLinksConnection)
	 */
	updateManyCtaLinks: BatchPayload;
	/** Update many CtaLink documents */
	updateManyCtaLinksConnection: CtaLinkConnection;
	/**
	 * Update many dividers
	 * @deprecated Please use the new paginated many mutation (updateManyDividersConnection)
	 */
	updateManyDividers: BatchPayload;
	/** Update many Divider documents */
	updateManyDividersConnection: DividerConnection;
	/**
	 * Update many eyecatchers
	 * @deprecated Please use the new paginated many mutation (updateManyEyecatchersConnection)
	 */
	updateManyEyecatchers: BatchPayload;
	/** Update many Eyecatcher documents */
	updateManyEyecatchersConnection: EyecatcherConnection;
	/**
	 * Update many heroImages
	 * @deprecated Please use the new paginated many mutation (updateManyHeroImagesConnection)
	 */
	updateManyHeroImages: BatchPayload;
	/** Update many HeroImage documents */
	updateManyHeroImagesConnection: HeroImageConnection;
	/**
	 * Update many images
	 * @deprecated Please use the new paginated many mutation (updateManyImagesConnection)
	 */
	updateManyImages: BatchPayload;
	/** Update many Image documents */
	updateManyImagesConnection: ImageConnection;
	/**
	 * Update many links
	 * @deprecated Please use the new paginated many mutation (updateManyLinksConnection)
	 */
	updateManyLinks: BatchPayload;
	/** Update many Link documents */
	updateManyLinksConnection: LinkConnection;
	/**
	 * Update many pages
	 * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
	 */
	updateManyPages: BatchPayload;
	/** Update many Page documents */
	updateManyPagesConnection: PageConnection;
	/**
	 * Update many referencesContainers
	 * @deprecated Please use the new paginated many mutation (updateManyReferencesContainersConnection)
	 */
	updateManyReferencesContainers: BatchPayload;
	/** Update many ReferencesContainer documents */
	updateManyReferencesContainersConnection: ReferencesContainerConnection;
	/**
	 * Update many referencesItems
	 * @deprecated Please use the new paginated many mutation (updateManyReferencesItemsConnection)
	 */
	updateManyReferencesItems: BatchPayload;
	/** Update many ReferencesItem documents */
	updateManyReferencesItemsConnection: ReferencesItemConnection;
	/**
	 * Update many texts
	 * @deprecated Please use the new paginated many mutation (updateManyTextsConnection)
	 */
	updateManyTexts: BatchPayload;
	/** Update many Text documents */
	updateManyTextsConnection: TextConnection;
	/** Update one page */
	updatePage?: Maybe<Page>;
	/** Update one referencesContainer */
	updateReferencesContainer?: Maybe<ReferencesContainer>;
	/** Update one referencesItem */
	updateReferencesItem?: Maybe<ReferencesItem>;
	/** Update one scheduledRelease */
	updateScheduledRelease?: Maybe<ScheduledRelease>;
	/** Update one text */
	updateText?: Maybe<Text>;
	/** Upsert one accordionContainer */
	upsertAccordionContainer?: Maybe<AccordionContainer>;
	/** Upsert one accordionItem */
	upsertAccordionItem?: Maybe<AccordionItem>;
	/** Upsert one asset */
	upsertAsset?: Maybe<Asset>;
	/** Upsert one assetLink */
	upsertAssetLink?: Maybe<AssetLink>;
	/** Upsert one blogPost */
	upsertBlogPost?: Maybe<BlogPost>;
	/** Upsert one cardIcon */
	upsertCardIcon?: Maybe<CardIcon>;
	/** Upsert one cardImage */
	upsertCardImage?: Maybe<CardImage>;
	/** Upsert one cardsContainer */
	upsertCardsContainer?: Maybe<CardsContainer>;
	/** Upsert one ctaLink */
	upsertCtaLink?: Maybe<CtaLink>;
	/** Upsert one divider */
	upsertDivider?: Maybe<Divider>;
	/** Upsert one eyecatcher */
	upsertEyecatcher?: Maybe<Eyecatcher>;
	/** Upsert one heroImage */
	upsertHeroImage?: Maybe<HeroImage>;
	/** Upsert one image */
	upsertImage?: Maybe<Image>;
	/** Upsert one link */
	upsertLink?: Maybe<Link>;
	/** Upsert one page */
	upsertPage?: Maybe<Page>;
	/** Upsert one referencesContainer */
	upsertReferencesContainer?: Maybe<ReferencesContainer>;
	/** Upsert one referencesItem */
	upsertReferencesItem?: Maybe<ReferencesItem>;
	/** Upsert one text */
	upsertText?: Maybe<Text>;
};

export type MutationCreateAccordionContainerArgs = {
	data: AccordionContainerCreateInput;
};

export type MutationCreateAccordionItemArgs = {
	data: AccordionItemCreateInput;
};

export type MutationCreateAssetArgs = {
	data: AssetCreateInput;
};

export type MutationCreateAssetLinkArgs = {
	data: AssetLinkCreateInput;
};

export type MutationCreateBlogPostArgs = {
	data: BlogPostCreateInput;
};

export type MutationCreateCardIconArgs = {
	data: CardIconCreateInput;
};

export type MutationCreateCardImageArgs = {
	data: CardImageCreateInput;
};

export type MutationCreateCardsContainerArgs = {
	data: CardsContainerCreateInput;
};

export type MutationCreateCtaLinkArgs = {
	data: CtaLinkCreateInput;
};

export type MutationCreateDividerArgs = {
	data: DividerCreateInput;
};

export type MutationCreateEyecatcherArgs = {
	data: EyecatcherCreateInput;
};

export type MutationCreateHeroImageArgs = {
	data: HeroImageCreateInput;
};

export type MutationCreateImageArgs = {
	data: ImageCreateInput;
};

export type MutationCreateLinkArgs = {
	data: LinkCreateInput;
};

export type MutationCreatePageArgs = {
	data: PageCreateInput;
};

export type MutationCreateReferencesContainerArgs = {
	data: ReferencesContainerCreateInput;
};

export type MutationCreateReferencesItemArgs = {
	data: ReferencesItemCreateInput;
};

export type MutationCreateScheduledReleaseArgs = {
	data: ScheduledReleaseCreateInput;
};

export type MutationCreateTextArgs = {
	data: TextCreateInput;
};

export type MutationDeleteAccordionContainerArgs = {
	where: AccordionContainerWhereUniqueInput;
};

export type MutationDeleteAccordionItemArgs = {
	where: AccordionItemWhereUniqueInput;
};

export type MutationDeleteAssetArgs = {
	where: AssetWhereUniqueInput;
};

export type MutationDeleteAssetLinkArgs = {
	where: AssetLinkWhereUniqueInput;
};

export type MutationDeleteBlogPostArgs = {
	where: BlogPostWhereUniqueInput;
};

export type MutationDeleteCardIconArgs = {
	where: CardIconWhereUniqueInput;
};

export type MutationDeleteCardImageArgs = {
	where: CardImageWhereUniqueInput;
};

export type MutationDeleteCardsContainerArgs = {
	where: CardsContainerWhereUniqueInput;
};

export type MutationDeleteCtaLinkArgs = {
	where: CtaLinkWhereUniqueInput;
};

export type MutationDeleteDividerArgs = {
	where: DividerWhereUniqueInput;
};

export type MutationDeleteEyecatcherArgs = {
	where: EyecatcherWhereUniqueInput;
};

export type MutationDeleteHeroImageArgs = {
	where: HeroImageWhereUniqueInput;
};

export type MutationDeleteImageArgs = {
	where: ImageWhereUniqueInput;
};

export type MutationDeleteLinkArgs = {
	where: LinkWhereUniqueInput;
};

export type MutationDeleteManyAccordionContainersArgs = {
	where?: InputMaybe<AccordionContainerManyWhereInput>;
};

export type MutationDeleteManyAccordionContainersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<AccordionContainerManyWhereInput>;
};

export type MutationDeleteManyAccordionItemsArgs = {
	where?: InputMaybe<AccordionItemManyWhereInput>;
};

export type MutationDeleteManyAccordionItemsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<AccordionItemManyWhereInput>;
};

export type MutationDeleteManyAssetLinksArgs = {
	where?: InputMaybe<AssetLinkManyWhereInput>;
};

export type MutationDeleteManyAssetLinksConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<AssetLinkManyWhereInput>;
};

export type MutationDeleteManyAssetsArgs = {
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyBlogPostsArgs = {
	where?: InputMaybe<BlogPostManyWhereInput>;
};

export type MutationDeleteManyBlogPostsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<BlogPostManyWhereInput>;
};

export type MutationDeleteManyCardIconsArgs = {
	where?: InputMaybe<CardIconManyWhereInput>;
};

export type MutationDeleteManyCardIconsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<CardIconManyWhereInput>;
};

export type MutationDeleteManyCardImagesArgs = {
	where?: InputMaybe<CardImageManyWhereInput>;
};

export type MutationDeleteManyCardImagesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<CardImageManyWhereInput>;
};

export type MutationDeleteManyCardsContainersArgs = {
	where?: InputMaybe<CardsContainerManyWhereInput>;
};

export type MutationDeleteManyCardsContainersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<CardsContainerManyWhereInput>;
};

export type MutationDeleteManyCtaLinksArgs = {
	where?: InputMaybe<CtaLinkManyWhereInput>;
};

export type MutationDeleteManyCtaLinksConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<CtaLinkManyWhereInput>;
};

export type MutationDeleteManyDividersArgs = {
	where?: InputMaybe<DividerManyWhereInput>;
};

export type MutationDeleteManyDividersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<DividerManyWhereInput>;
};

export type MutationDeleteManyEyecatchersArgs = {
	where?: InputMaybe<EyecatcherManyWhereInput>;
};

export type MutationDeleteManyEyecatchersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<EyecatcherManyWhereInput>;
};

export type MutationDeleteManyHeroImagesArgs = {
	where?: InputMaybe<HeroImageManyWhereInput>;
};

export type MutationDeleteManyHeroImagesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<HeroImageManyWhereInput>;
};

export type MutationDeleteManyImagesArgs = {
	where?: InputMaybe<ImageManyWhereInput>;
};

export type MutationDeleteManyImagesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ImageManyWhereInput>;
};

export type MutationDeleteManyLinksArgs = {
	where?: InputMaybe<LinkManyWhereInput>;
};

export type MutationDeleteManyLinksConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<LinkManyWhereInput>;
};

export type MutationDeleteManyPagesArgs = {
	where?: InputMaybe<PageManyWhereInput>;
};

export type MutationDeleteManyPagesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<PageManyWhereInput>;
};

export type MutationDeleteManyReferencesContainersArgs = {
	where?: InputMaybe<ReferencesContainerManyWhereInput>;
};

export type MutationDeleteManyReferencesContainersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ReferencesContainerManyWhereInput>;
};

export type MutationDeleteManyReferencesItemsArgs = {
	where?: InputMaybe<ReferencesItemManyWhereInput>;
};

export type MutationDeleteManyReferencesItemsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ReferencesItemManyWhereInput>;
};

export type MutationDeleteManyTextsArgs = {
	where?: InputMaybe<TextManyWhereInput>;
};

export type MutationDeleteManyTextsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<TextManyWhereInput>;
};

export type MutationDeletePageArgs = {
	where: PageWhereUniqueInput;
};

export type MutationDeleteReferencesContainerArgs = {
	where: ReferencesContainerWhereUniqueInput;
};

export type MutationDeleteReferencesItemArgs = {
	where: ReferencesItemWhereUniqueInput;
};

export type MutationDeleteScheduledOperationArgs = {
	where: ScheduledOperationWhereUniqueInput;
};

export type MutationDeleteScheduledReleaseArgs = {
	where: ScheduledReleaseWhereUniqueInput;
};

export type MutationDeleteTextArgs = {
	where: TextWhereUniqueInput;
};

export type MutationPublishAccordionContainerArgs = {
	to?: Array<Stage>;
	where: AccordionContainerWhereUniqueInput;
};

export type MutationPublishAccordionItemArgs = {
	to?: Array<Stage>;
	where: AccordionItemWhereUniqueInput;
};

export type MutationPublishAssetArgs = {
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']>;
	to?: Array<Stage>;
	where: AssetWhereUniqueInput;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishAssetLinkArgs = {
	to?: Array<Stage>;
	where: AssetLinkWhereUniqueInput;
};

export type MutationPublishBlogPostArgs = {
	to?: Array<Stage>;
	where: BlogPostWhereUniqueInput;
};

export type MutationPublishCardIconArgs = {
	to?: Array<Stage>;
	where: CardIconWhereUniqueInput;
};

export type MutationPublishCardImageArgs = {
	to?: Array<Stage>;
	where: CardImageWhereUniqueInput;
};

export type MutationPublishCardsContainerArgs = {
	to?: Array<Stage>;
	where: CardsContainerWhereUniqueInput;
};

export type MutationPublishCtaLinkArgs = {
	to?: Array<Stage>;
	where: CtaLinkWhereUniqueInput;
};

export type MutationPublishDividerArgs = {
	to?: Array<Stage>;
	where: DividerWhereUniqueInput;
};

export type MutationPublishEyecatcherArgs = {
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']>;
	to?: Array<Stage>;
	where: EyecatcherWhereUniqueInput;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishHeroImageArgs = {
	to?: Array<Stage>;
	where: HeroImageWhereUniqueInput;
};

export type MutationPublishImageArgs = {
	to?: Array<Stage>;
	where: ImageWhereUniqueInput;
};

export type MutationPublishLinkArgs = {
	to?: Array<Stage>;
	where: LinkWhereUniqueInput;
};

export type MutationPublishManyAccordionContainersArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<AccordionContainerManyWhereInput>;
};

export type MutationPublishManyAccordionContainersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	to?: Array<Stage>;
	where?: InputMaybe<AccordionContainerManyWhereInput>;
};

export type MutationPublishManyAccordionItemsArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<AccordionItemManyWhereInput>;
};

export type MutationPublishManyAccordionItemsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	to?: Array<Stage>;
	where?: InputMaybe<AccordionItemManyWhereInput>;
};

export type MutationPublishManyAssetLinksArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<AssetLinkManyWhereInput>;
};

export type MutationPublishManyAssetLinksConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	to?: Array<Stage>;
	where?: InputMaybe<AssetLinkManyWhereInput>;
};

export type MutationPublishManyAssetsArgs = {
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']>;
	to?: Array<Stage>;
	where?: InputMaybe<AssetManyWhereInput>;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishManyAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']>;
	skip?: InputMaybe<Scalars['Int']>;
	to?: Array<Stage>;
	where?: InputMaybe<AssetManyWhereInput>;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishManyBlogPostsArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<BlogPostManyWhereInput>;
};

export type MutationPublishManyBlogPostsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	to?: Array<Stage>;
	where?: InputMaybe<BlogPostManyWhereInput>;
};

export type MutationPublishManyCardIconsArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<CardIconManyWhereInput>;
};

export type MutationPublishManyCardIconsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	to?: Array<Stage>;
	where?: InputMaybe<CardIconManyWhereInput>;
};

export type MutationPublishManyCardImagesArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<CardImageManyWhereInput>;
};

export type MutationPublishManyCardImagesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	to?: Array<Stage>;
	where?: InputMaybe<CardImageManyWhereInput>;
};

export type MutationPublishManyCardsContainersArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<CardsContainerManyWhereInput>;
};

export type MutationPublishManyCardsContainersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	to?: Array<Stage>;
	where?: InputMaybe<CardsContainerManyWhereInput>;
};

export type MutationPublishManyCtaLinksArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<CtaLinkManyWhereInput>;
};

export type MutationPublishManyCtaLinksConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	to?: Array<Stage>;
	where?: InputMaybe<CtaLinkManyWhereInput>;
};

export type MutationPublishManyDividersArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<DividerManyWhereInput>;
};

export type MutationPublishManyDividersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	to?: Array<Stage>;
	where?: InputMaybe<DividerManyWhereInput>;
};

export type MutationPublishManyEyecatchersArgs = {
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']>;
	to?: Array<Stage>;
	where?: InputMaybe<EyecatcherManyWhereInput>;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishManyEyecatchersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']>;
	skip?: InputMaybe<Scalars['Int']>;
	to?: Array<Stage>;
	where?: InputMaybe<EyecatcherManyWhereInput>;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationPublishManyHeroImagesArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<HeroImageManyWhereInput>;
};

export type MutationPublishManyHeroImagesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	to?: Array<Stage>;
	where?: InputMaybe<HeroImageManyWhereInput>;
};

export type MutationPublishManyImagesArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<ImageManyWhereInput>;
};

export type MutationPublishManyImagesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	to?: Array<Stage>;
	where?: InputMaybe<ImageManyWhereInput>;
};

export type MutationPublishManyLinksArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<LinkManyWhereInput>;
};

export type MutationPublishManyLinksConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	to?: Array<Stage>;
	where?: InputMaybe<LinkManyWhereInput>;
};

export type MutationPublishManyPagesArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<PageManyWhereInput>;
};

export type MutationPublishManyPagesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	to?: Array<Stage>;
	where?: InputMaybe<PageManyWhereInput>;
};

export type MutationPublishManyReferencesContainersArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<ReferencesContainerManyWhereInput>;
};

export type MutationPublishManyReferencesContainersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	to?: Array<Stage>;
	where?: InputMaybe<ReferencesContainerManyWhereInput>;
};

export type MutationPublishManyReferencesItemsArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<ReferencesItemManyWhereInput>;
};

export type MutationPublishManyReferencesItemsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	to?: Array<Stage>;
	where?: InputMaybe<ReferencesItemManyWhereInput>;
};

export type MutationPublishManyTextsArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<TextManyWhereInput>;
};

export type MutationPublishManyTextsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	to?: Array<Stage>;
	where?: InputMaybe<TextManyWhereInput>;
};

export type MutationPublishPageArgs = {
	to?: Array<Stage>;
	where: PageWhereUniqueInput;
};

export type MutationPublishReferencesContainerArgs = {
	to?: Array<Stage>;
	where: ReferencesContainerWhereUniqueInput;
};

export type MutationPublishReferencesItemArgs = {
	to?: Array<Stage>;
	where: ReferencesItemWhereUniqueInput;
};

export type MutationPublishTextArgs = {
	to?: Array<Stage>;
	where: TextWhereUniqueInput;
};

export type MutationSchedulePublishAccordionContainerArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: AccordionContainerWhereUniqueInput;
};

export type MutationSchedulePublishAccordionItemArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: AccordionItemWhereUniqueInput;
};

export type MutationSchedulePublishAssetArgs = {
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: AssetWhereUniqueInput;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationSchedulePublishAssetLinkArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: AssetLinkWhereUniqueInput;
};

export type MutationSchedulePublishBlogPostArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: BlogPostWhereUniqueInput;
};

export type MutationSchedulePublishCardIconArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: CardIconWhereUniqueInput;
};

export type MutationSchedulePublishCardImageArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: CardImageWhereUniqueInput;
};

export type MutationSchedulePublishCardsContainerArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: CardsContainerWhereUniqueInput;
};

export type MutationSchedulePublishCtaLinkArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: CtaLinkWhereUniqueInput;
};

export type MutationSchedulePublishDividerArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: DividerWhereUniqueInput;
};

export type MutationSchedulePublishEyecatcherArgs = {
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: EyecatcherWhereUniqueInput;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};

export type MutationSchedulePublishHeroImageArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: HeroImageWhereUniqueInput;
};

export type MutationSchedulePublishImageArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: ImageWhereUniqueInput;
};

export type MutationSchedulePublishLinkArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: LinkWhereUniqueInput;
};

export type MutationSchedulePublishPageArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: PageWhereUniqueInput;
};

export type MutationSchedulePublishReferencesContainerArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: ReferencesContainerWhereUniqueInput;
};

export type MutationSchedulePublishReferencesItemArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: ReferencesItemWhereUniqueInput;
};

export type MutationSchedulePublishTextArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: TextWhereUniqueInput;
};

export type MutationScheduleUnpublishAccordionContainerArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: AccordionContainerWhereUniqueInput;
};

export type MutationScheduleUnpublishAccordionItemArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: AccordionItemWhereUniqueInput;
};

export type MutationScheduleUnpublishAssetArgs = {
	from?: Array<Stage>;
	locales?: InputMaybe<Array<Locale>>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	unpublishBase?: InputMaybe<Scalars['Boolean']>;
	where: AssetWhereUniqueInput;
};

export type MutationScheduleUnpublishAssetLinkArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: AssetLinkWhereUniqueInput;
};

export type MutationScheduleUnpublishBlogPostArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: BlogPostWhereUniqueInput;
};

export type MutationScheduleUnpublishCardIconArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: CardIconWhereUniqueInput;
};

export type MutationScheduleUnpublishCardImageArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: CardImageWhereUniqueInput;
};

export type MutationScheduleUnpublishCardsContainerArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: CardsContainerWhereUniqueInput;
};

export type MutationScheduleUnpublishCtaLinkArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: CtaLinkWhereUniqueInput;
};

export type MutationScheduleUnpublishDividerArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: DividerWhereUniqueInput;
};

export type MutationScheduleUnpublishEyecatcherArgs = {
	from?: Array<Stage>;
	locales?: InputMaybe<Array<Locale>>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	unpublishBase?: InputMaybe<Scalars['Boolean']>;
	where: EyecatcherWhereUniqueInput;
};

export type MutationScheduleUnpublishHeroImageArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: HeroImageWhereUniqueInput;
};

export type MutationScheduleUnpublishImageArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: ImageWhereUniqueInput;
};

export type MutationScheduleUnpublishLinkArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: LinkWhereUniqueInput;
};

export type MutationScheduleUnpublishPageArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: PageWhereUniqueInput;
};

export type MutationScheduleUnpublishReferencesContainerArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: ReferencesContainerWhereUniqueInput;
};

export type MutationScheduleUnpublishReferencesItemArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: ReferencesItemWhereUniqueInput;
};

export type MutationScheduleUnpublishTextArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: TextWhereUniqueInput;
};

export type MutationUnpublishAccordionContainerArgs = {
	from?: Array<Stage>;
	where: AccordionContainerWhereUniqueInput;
};

export type MutationUnpublishAccordionItemArgs = {
	from?: Array<Stage>;
	where: AccordionItemWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
	from?: Array<Stage>;
	locales?: InputMaybe<Array<Locale>>;
	unpublishBase?: InputMaybe<Scalars['Boolean']>;
	where: AssetWhereUniqueInput;
};

export type MutationUnpublishAssetLinkArgs = {
	from?: Array<Stage>;
	where: AssetLinkWhereUniqueInput;
};

export type MutationUnpublishBlogPostArgs = {
	from?: Array<Stage>;
	where: BlogPostWhereUniqueInput;
};

export type MutationUnpublishCardIconArgs = {
	from?: Array<Stage>;
	where: CardIconWhereUniqueInput;
};

export type MutationUnpublishCardImageArgs = {
	from?: Array<Stage>;
	where: CardImageWhereUniqueInput;
};

export type MutationUnpublishCardsContainerArgs = {
	from?: Array<Stage>;
	where: CardsContainerWhereUniqueInput;
};

export type MutationUnpublishCtaLinkArgs = {
	from?: Array<Stage>;
	where: CtaLinkWhereUniqueInput;
};

export type MutationUnpublishDividerArgs = {
	from?: Array<Stage>;
	where: DividerWhereUniqueInput;
};

export type MutationUnpublishEyecatcherArgs = {
	from?: Array<Stage>;
	locales?: InputMaybe<Array<Locale>>;
	unpublishBase?: InputMaybe<Scalars['Boolean']>;
	where: EyecatcherWhereUniqueInput;
};

export type MutationUnpublishHeroImageArgs = {
	from?: Array<Stage>;
	where: HeroImageWhereUniqueInput;
};

export type MutationUnpublishImageArgs = {
	from?: Array<Stage>;
	where: ImageWhereUniqueInput;
};

export type MutationUnpublishLinkArgs = {
	from?: Array<Stage>;
	where: LinkWhereUniqueInput;
};

export type MutationUnpublishManyAccordionContainersArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<AccordionContainerManyWhereInput>;
};

export type MutationUnpublishManyAccordionContainersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<AccordionContainerManyWhereInput>;
};

export type MutationUnpublishManyAccordionItemsArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<AccordionItemManyWhereInput>;
};

export type MutationUnpublishManyAccordionItemsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<AccordionItemManyWhereInput>;
};

export type MutationUnpublishManyAssetLinksArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<AssetLinkManyWhereInput>;
};

export type MutationUnpublishManyAssetLinksConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<AssetLinkManyWhereInput>;
};

export type MutationUnpublishManyAssetsArgs = {
	from?: Array<Stage>;
	locales?: InputMaybe<Array<Locale>>;
	unpublishBase?: InputMaybe<Scalars['Boolean']>;
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: InputMaybe<Stage>;
	unpublishBase?: InputMaybe<Scalars['Boolean']>;
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyBlogPostsArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<BlogPostManyWhereInput>;
};

export type MutationUnpublishManyBlogPostsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<BlogPostManyWhereInput>;
};

export type MutationUnpublishManyCardIconsArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<CardIconManyWhereInput>;
};

export type MutationUnpublishManyCardIconsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<CardIconManyWhereInput>;
};

export type MutationUnpublishManyCardImagesArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<CardImageManyWhereInput>;
};

export type MutationUnpublishManyCardImagesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<CardImageManyWhereInput>;
};

export type MutationUnpublishManyCardsContainersArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<CardsContainerManyWhereInput>;
};

export type MutationUnpublishManyCardsContainersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<CardsContainerManyWhereInput>;
};

export type MutationUnpublishManyCtaLinksArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<CtaLinkManyWhereInput>;
};

export type MutationUnpublishManyCtaLinksConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<CtaLinkManyWhereInput>;
};

export type MutationUnpublishManyDividersArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<DividerManyWhereInput>;
};

export type MutationUnpublishManyDividersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<DividerManyWhereInput>;
};

export type MutationUnpublishManyEyecatchersArgs = {
	from?: Array<Stage>;
	locales?: InputMaybe<Array<Locale>>;
	unpublishBase?: InputMaybe<Scalars['Boolean']>;
	where?: InputMaybe<EyecatcherManyWhereInput>;
};

export type MutationUnpublishManyEyecatchersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: InputMaybe<Stage>;
	unpublishBase?: InputMaybe<Scalars['Boolean']>;
	where?: InputMaybe<EyecatcherManyWhereInput>;
};

export type MutationUnpublishManyHeroImagesArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<HeroImageManyWhereInput>;
};

export type MutationUnpublishManyHeroImagesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<HeroImageManyWhereInput>;
};

export type MutationUnpublishManyImagesArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<ImageManyWhereInput>;
};

export type MutationUnpublishManyImagesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<ImageManyWhereInput>;
};

export type MutationUnpublishManyLinksArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<LinkManyWhereInput>;
};

export type MutationUnpublishManyLinksConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<LinkManyWhereInput>;
};

export type MutationUnpublishManyPagesArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<PageManyWhereInput>;
};

export type MutationUnpublishManyPagesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<PageManyWhereInput>;
};

export type MutationUnpublishManyReferencesContainersArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<ReferencesContainerManyWhereInput>;
};

export type MutationUnpublishManyReferencesContainersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<ReferencesContainerManyWhereInput>;
};

export type MutationUnpublishManyReferencesItemsArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<ReferencesItemManyWhereInput>;
};

export type MutationUnpublishManyReferencesItemsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<ReferencesItemManyWhereInput>;
};

export type MutationUnpublishManyTextsArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<TextManyWhereInput>;
};

export type MutationUnpublishManyTextsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<TextManyWhereInput>;
};

export type MutationUnpublishPageArgs = {
	from?: Array<Stage>;
	where: PageWhereUniqueInput;
};

export type MutationUnpublishReferencesContainerArgs = {
	from?: Array<Stage>;
	where: ReferencesContainerWhereUniqueInput;
};

export type MutationUnpublishReferencesItemArgs = {
	from?: Array<Stage>;
	where: ReferencesItemWhereUniqueInput;
};

export type MutationUnpublishTextArgs = {
	from?: Array<Stage>;
	where: TextWhereUniqueInput;
};

export type MutationUpdateAccordionContainerArgs = {
	data: AccordionContainerUpdateInput;
	where: AccordionContainerWhereUniqueInput;
};

export type MutationUpdateAccordionItemArgs = {
	data: AccordionItemUpdateInput;
	where: AccordionItemWhereUniqueInput;
};

export type MutationUpdateAssetArgs = {
	data: AssetUpdateInput;
	where: AssetWhereUniqueInput;
};

export type MutationUpdateAssetLinkArgs = {
	data: AssetLinkUpdateInput;
	where: AssetLinkWhereUniqueInput;
};

export type MutationUpdateBlogPostArgs = {
	data: BlogPostUpdateInput;
	where: BlogPostWhereUniqueInput;
};

export type MutationUpdateCardIconArgs = {
	data: CardIconUpdateInput;
	where: CardIconWhereUniqueInput;
};

export type MutationUpdateCardImageArgs = {
	data: CardImageUpdateInput;
	where: CardImageWhereUniqueInput;
};

export type MutationUpdateCardsContainerArgs = {
	data: CardsContainerUpdateInput;
	where: CardsContainerWhereUniqueInput;
};

export type MutationUpdateCtaLinkArgs = {
	data: CtaLinkUpdateInput;
	where: CtaLinkWhereUniqueInput;
};

export type MutationUpdateDividerArgs = {
	data: DividerUpdateInput;
	where: DividerWhereUniqueInput;
};

export type MutationUpdateEyecatcherArgs = {
	data: EyecatcherUpdateInput;
	where: EyecatcherWhereUniqueInput;
};

export type MutationUpdateHeroImageArgs = {
	data: HeroImageUpdateInput;
	where: HeroImageWhereUniqueInput;
};

export type MutationUpdateImageArgs = {
	data: ImageUpdateInput;
	where: ImageWhereUniqueInput;
};

export type MutationUpdateLinkArgs = {
	data: LinkUpdateInput;
	where: LinkWhereUniqueInput;
};

export type MutationUpdateManyAccordionContainersArgs = {
	data: AccordionContainerUpdateManyInput;
	where?: InputMaybe<AccordionContainerManyWhereInput>;
};

export type MutationUpdateManyAccordionContainersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	data: AccordionContainerUpdateManyInput;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<AccordionContainerManyWhereInput>;
};

export type MutationUpdateManyAccordionItemsArgs = {
	data: AccordionItemUpdateManyInput;
	where?: InputMaybe<AccordionItemManyWhereInput>;
};

export type MutationUpdateManyAccordionItemsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	data: AccordionItemUpdateManyInput;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<AccordionItemManyWhereInput>;
};

export type MutationUpdateManyAssetLinksArgs = {
	data: AssetLinkUpdateManyInput;
	where?: InputMaybe<AssetLinkManyWhereInput>;
};

export type MutationUpdateManyAssetLinksConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	data: AssetLinkUpdateManyInput;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<AssetLinkManyWhereInput>;
};

export type MutationUpdateManyAssetsArgs = {
	data: AssetUpdateManyInput;
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	data: AssetUpdateManyInput;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyBlogPostsArgs = {
	data: BlogPostUpdateManyInput;
	where?: InputMaybe<BlogPostManyWhereInput>;
};

export type MutationUpdateManyBlogPostsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	data: BlogPostUpdateManyInput;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<BlogPostManyWhereInput>;
};

export type MutationUpdateManyCardIconsArgs = {
	data: CardIconUpdateManyInput;
	where?: InputMaybe<CardIconManyWhereInput>;
};

export type MutationUpdateManyCardIconsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	data: CardIconUpdateManyInput;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<CardIconManyWhereInput>;
};

export type MutationUpdateManyCardImagesArgs = {
	data: CardImageUpdateManyInput;
	where?: InputMaybe<CardImageManyWhereInput>;
};

export type MutationUpdateManyCardImagesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	data: CardImageUpdateManyInput;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<CardImageManyWhereInput>;
};

export type MutationUpdateManyCardsContainersArgs = {
	data: CardsContainerUpdateManyInput;
	where?: InputMaybe<CardsContainerManyWhereInput>;
};

export type MutationUpdateManyCardsContainersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	data: CardsContainerUpdateManyInput;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<CardsContainerManyWhereInput>;
};

export type MutationUpdateManyCtaLinksArgs = {
	data: CtaLinkUpdateManyInput;
	where?: InputMaybe<CtaLinkManyWhereInput>;
};

export type MutationUpdateManyCtaLinksConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	data: CtaLinkUpdateManyInput;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<CtaLinkManyWhereInput>;
};

export type MutationUpdateManyDividersArgs = {
	data: DividerUpdateManyInput;
	where?: InputMaybe<DividerManyWhereInput>;
};

export type MutationUpdateManyDividersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	data: DividerUpdateManyInput;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<DividerManyWhereInput>;
};

export type MutationUpdateManyEyecatchersArgs = {
	data: EyecatcherUpdateManyInput;
	where?: InputMaybe<EyecatcherManyWhereInput>;
};

export type MutationUpdateManyEyecatchersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	data: EyecatcherUpdateManyInput;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<EyecatcherManyWhereInput>;
};

export type MutationUpdateManyHeroImagesArgs = {
	data: HeroImageUpdateManyInput;
	where?: InputMaybe<HeroImageManyWhereInput>;
};

export type MutationUpdateManyHeroImagesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	data: HeroImageUpdateManyInput;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<HeroImageManyWhereInput>;
};

export type MutationUpdateManyImagesArgs = {
	data: ImageUpdateManyInput;
	where?: InputMaybe<ImageManyWhereInput>;
};

export type MutationUpdateManyImagesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	data: ImageUpdateManyInput;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ImageManyWhereInput>;
};

export type MutationUpdateManyLinksArgs = {
	data: LinkUpdateManyInput;
	where?: InputMaybe<LinkManyWhereInput>;
};

export type MutationUpdateManyLinksConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	data: LinkUpdateManyInput;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<LinkManyWhereInput>;
};

export type MutationUpdateManyPagesArgs = {
	data: PageUpdateManyInput;
	where?: InputMaybe<PageManyWhereInput>;
};

export type MutationUpdateManyPagesConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	data: PageUpdateManyInput;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<PageManyWhereInput>;
};

export type MutationUpdateManyReferencesContainersArgs = {
	data: ReferencesContainerUpdateManyInput;
	where?: InputMaybe<ReferencesContainerManyWhereInput>;
};

export type MutationUpdateManyReferencesContainersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	data: ReferencesContainerUpdateManyInput;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ReferencesContainerManyWhereInput>;
};

export type MutationUpdateManyReferencesItemsArgs = {
	data: ReferencesItemUpdateManyInput;
	where?: InputMaybe<ReferencesItemManyWhereInput>;
};

export type MutationUpdateManyReferencesItemsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	data: ReferencesItemUpdateManyInput;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ReferencesItemManyWhereInput>;
};

export type MutationUpdateManyTextsArgs = {
	data: TextUpdateManyInput;
	where?: InputMaybe<TextManyWhereInput>;
};

export type MutationUpdateManyTextsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	data: TextUpdateManyInput;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<TextManyWhereInput>;
};

export type MutationUpdatePageArgs = {
	data: PageUpdateInput;
	where: PageWhereUniqueInput;
};

export type MutationUpdateReferencesContainerArgs = {
	data: ReferencesContainerUpdateInput;
	where: ReferencesContainerWhereUniqueInput;
};

export type MutationUpdateReferencesItemArgs = {
	data: ReferencesItemUpdateInput;
	where: ReferencesItemWhereUniqueInput;
};

export type MutationUpdateScheduledReleaseArgs = {
	data: ScheduledReleaseUpdateInput;
	where: ScheduledReleaseWhereUniqueInput;
};

export type MutationUpdateTextArgs = {
	data: TextUpdateInput;
	where: TextWhereUniqueInput;
};

export type MutationUpsertAccordionContainerArgs = {
	upsert: AccordionContainerUpsertInput;
	where: AccordionContainerWhereUniqueInput;
};

export type MutationUpsertAccordionItemArgs = {
	upsert: AccordionItemUpsertInput;
	where: AccordionItemWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
	upsert: AssetUpsertInput;
	where: AssetWhereUniqueInput;
};

export type MutationUpsertAssetLinkArgs = {
	upsert: AssetLinkUpsertInput;
	where: AssetLinkWhereUniqueInput;
};

export type MutationUpsertBlogPostArgs = {
	upsert: BlogPostUpsertInput;
	where: BlogPostWhereUniqueInput;
};

export type MutationUpsertCardIconArgs = {
	upsert: CardIconUpsertInput;
	where: CardIconWhereUniqueInput;
};

export type MutationUpsertCardImageArgs = {
	upsert: CardImageUpsertInput;
	where: CardImageWhereUniqueInput;
};

export type MutationUpsertCardsContainerArgs = {
	upsert: CardsContainerUpsertInput;
	where: CardsContainerWhereUniqueInput;
};

export type MutationUpsertCtaLinkArgs = {
	upsert: CtaLinkUpsertInput;
	where: CtaLinkWhereUniqueInput;
};

export type MutationUpsertDividerArgs = {
	upsert: DividerUpsertInput;
	where: DividerWhereUniqueInput;
};

export type MutationUpsertEyecatcherArgs = {
	upsert: EyecatcherUpsertInput;
	where: EyecatcherWhereUniqueInput;
};

export type MutationUpsertHeroImageArgs = {
	upsert: HeroImageUpsertInput;
	where: HeroImageWhereUniqueInput;
};

export type MutationUpsertImageArgs = {
	upsert: ImageUpsertInput;
	where: ImageWhereUniqueInput;
};

export type MutationUpsertLinkArgs = {
	upsert: LinkUpsertInput;
	where: LinkWhereUniqueInput;
};

export type MutationUpsertPageArgs = {
	upsert: PageUpsertInput;
	where: PageWhereUniqueInput;
};

export type MutationUpsertReferencesContainerArgs = {
	upsert: ReferencesContainerUpsertInput;
	where: ReferencesContainerWhereUniqueInput;
};

export type MutationUpsertReferencesItemArgs = {
	upsert: ReferencesItemUpsertInput;
	where: ReferencesItemWhereUniqueInput;
};

export type MutationUpsertTextArgs = {
	upsert: TextUpsertInput;
	where: TextWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
	/** The id of the object. */
	id: Scalars['ID'];
	/** The Stage of an object */
	stage: Stage;
};

export enum Padding {
	Large = 'Large',
	Medium = 'Medium',
	None = 'None',
	Small = 'Small'
}

export type Page = Node & {
	__typename?: 'Page';
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Get the document in other stages */
	documentInStages: Array<Page>;
	/** List of Page versions */
	history: Array<Version>;
	/** The unique identifier */
	id: Scalars['ID'];
	manytomanymodulsperpage: Array<PageMultiplemodulsperpage>;
	modules: Array<PageModul>;
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	scheduledIn: Array<ScheduledOperation>;
	slug: Scalars['String'];
	source?: Maybe<Link>;
	/** System stage field */
	stage: Stage;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

export type PageCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type PageDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

export type PageHistoryArgs = {
	limit?: Scalars['Int'];
	skip?: Scalars['Int'];
	stageOverride?: InputMaybe<Stage>;
};

export type PageManytomanymodulsperpageArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
};

export type PageModulesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
};

export type PagePublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type PageScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type PageSourceArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type PageUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type PageConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
	__typename?: 'PageConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<PageEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type PageCreateInput = {
	createdAt?: InputMaybe<Scalars['DateTime']>;
	manytomanymodulsperpage?: InputMaybe<PageMultiplemodulsperpageCreateManyInlineInput>;
	modules?: InputMaybe<PageModulCreateManyInlineInput>;
	slug: Scalars['String'];
	source?: InputMaybe<LinkCreateOneInlineInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PageCreateManyInlineInput = {
	/** Connect multiple existing Page documents */
	connect?: InputMaybe<Array<PageWhereUniqueInput>>;
	/** Create and connect multiple existing Page documents */
	create?: InputMaybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
	/** Connect one existing Page document */
	connect?: InputMaybe<PageWhereUniqueInput>;
	/** Create and connect one Page document */
	create?: InputMaybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
	__typename?: 'PageEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
	__typename?: 'PageInfo';
	/** When paginating forwards, the cursor to continue. */
	endCursor?: Maybe<Scalars['String']>;
	/** When paginating forwards, are there more items? */
	hasNextPage: Scalars['Boolean'];
	/** When paginating backwards, are there more items? */
	hasPreviousPage: Scalars['Boolean'];
	/** Number of items in the current page. */
	pageSize?: Maybe<Scalars['Int']>;
	/** When paginating backwards, the cursor to continue. */
	startCursor?: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<PageWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<PageWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<PageWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	slug?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	slug_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	slug_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	slug_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	slug_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	slug_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	slug_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	slug_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	slug_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	slug_starts_with?: InputMaybe<Scalars['String']>;
	source?: InputMaybe<LinkWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export type PageModul =
	| AccordionContainer
	| AssetLink
	| BlogPost
	| CardsContainer
	| CtaLink
	| Divider
	| Eyecatcher
	| HeroImage
	| Image
	| ReferencesContainer
	| Text;

export type PageModulConnectInput = {
	AccordionContainer?: InputMaybe<AccordionContainerConnectInput>;
	AssetLink?: InputMaybe<AssetLinkConnectInput>;
	BlogPost?: InputMaybe<BlogPostConnectInput>;
	CardsContainer?: InputMaybe<CardsContainerConnectInput>;
	CtaLink?: InputMaybe<CtaLinkConnectInput>;
	Divider?: InputMaybe<DividerConnectInput>;
	Eyecatcher?: InputMaybe<EyecatcherConnectInput>;
	HeroImage?: InputMaybe<HeroImageConnectInput>;
	Image?: InputMaybe<ImageConnectInput>;
	ReferencesContainer?: InputMaybe<ReferencesContainerConnectInput>;
	Text?: InputMaybe<TextConnectInput>;
};

export type PageModulCreateInput = {
	AccordionContainer?: InputMaybe<AccordionContainerCreateInput>;
	AssetLink?: InputMaybe<AssetLinkCreateInput>;
	BlogPost?: InputMaybe<BlogPostCreateInput>;
	CardsContainer?: InputMaybe<CardsContainerCreateInput>;
	CtaLink?: InputMaybe<CtaLinkCreateInput>;
	Divider?: InputMaybe<DividerCreateInput>;
	Eyecatcher?: InputMaybe<EyecatcherCreateInput>;
	HeroImage?: InputMaybe<HeroImageCreateInput>;
	Image?: InputMaybe<ImageCreateInput>;
	ReferencesContainer?: InputMaybe<ReferencesContainerCreateInput>;
	Text?: InputMaybe<TextCreateInput>;
};

export type PageModulCreateManyInlineInput = {
	/** Connect multiple existing PageModul documents */
	connect?: InputMaybe<Array<PageModulWhereUniqueInput>>;
	/** Create and connect multiple existing PageModul documents */
	create?: InputMaybe<Array<PageModulCreateInput>>;
};

export type PageModulCreateOneInlineInput = {
	/** Connect one existing PageModul document */
	connect?: InputMaybe<PageModulWhereUniqueInput>;
	/** Create and connect one PageModul document */
	create?: InputMaybe<PageModulCreateInput>;
};

export type PageModulUpdateInput = {
	AccordionContainer?: InputMaybe<AccordionContainerUpdateInput>;
	AssetLink?: InputMaybe<AssetLinkUpdateInput>;
	BlogPost?: InputMaybe<BlogPostUpdateInput>;
	CardsContainer?: InputMaybe<CardsContainerUpdateInput>;
	CtaLink?: InputMaybe<CtaLinkUpdateInput>;
	Divider?: InputMaybe<DividerUpdateInput>;
	Eyecatcher?: InputMaybe<EyecatcherUpdateInput>;
	HeroImage?: InputMaybe<HeroImageUpdateInput>;
	Image?: InputMaybe<ImageUpdateInput>;
	ReferencesContainer?: InputMaybe<ReferencesContainerUpdateInput>;
	Text?: InputMaybe<TextUpdateInput>;
};

export type PageModulUpdateManyInlineInput = {
	/** Connect multiple existing PageModul documents */
	connect?: InputMaybe<Array<PageModulConnectInput>>;
	/** Create and connect multiple PageModul documents */
	create?: InputMaybe<Array<PageModulCreateInput>>;
	/** Delete multiple PageModul documents */
	delete?: InputMaybe<Array<PageModulWhereUniqueInput>>;
	/** Disconnect multiple PageModul documents */
	disconnect?: InputMaybe<Array<PageModulWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing PageModul documents */
	set?: InputMaybe<Array<PageModulWhereUniqueInput>>;
	/** Update multiple PageModul documents */
	update?: InputMaybe<Array<PageModulUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple PageModul documents */
	upsert?: InputMaybe<Array<PageModulUpsertWithNestedWhereUniqueInput>>;
};

export type PageModulUpdateManyWithNestedWhereInput = {
	AccordionContainer?: InputMaybe<AccordionContainerUpdateManyWithNestedWhereInput>;
	AssetLink?: InputMaybe<AssetLinkUpdateManyWithNestedWhereInput>;
	BlogPost?: InputMaybe<BlogPostUpdateManyWithNestedWhereInput>;
	CardsContainer?: InputMaybe<CardsContainerUpdateManyWithNestedWhereInput>;
	CtaLink?: InputMaybe<CtaLinkUpdateManyWithNestedWhereInput>;
	Divider?: InputMaybe<DividerUpdateManyWithNestedWhereInput>;
	Eyecatcher?: InputMaybe<EyecatcherUpdateManyWithNestedWhereInput>;
	HeroImage?: InputMaybe<HeroImageUpdateManyWithNestedWhereInput>;
	Image?: InputMaybe<ImageUpdateManyWithNestedWhereInput>;
	ReferencesContainer?: InputMaybe<ReferencesContainerUpdateManyWithNestedWhereInput>;
	Text?: InputMaybe<TextUpdateManyWithNestedWhereInput>;
};

export type PageModulUpdateOneInlineInput = {
	/** Connect existing PageModul document */
	connect?: InputMaybe<PageModulWhereUniqueInput>;
	/** Create and connect one PageModul document */
	create?: InputMaybe<PageModulCreateInput>;
	/** Delete currently connected PageModul document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected PageModul document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single PageModul document */
	update?: InputMaybe<PageModulUpdateWithNestedWhereUniqueInput>;
	/** Upsert single PageModul document */
	upsert?: InputMaybe<PageModulUpsertWithNestedWhereUniqueInput>;
};

export type PageModulUpdateWithNestedWhereUniqueInput = {
	AccordionContainer?: InputMaybe<AccordionContainerUpdateWithNestedWhereUniqueInput>;
	AssetLink?: InputMaybe<AssetLinkUpdateWithNestedWhereUniqueInput>;
	BlogPost?: InputMaybe<BlogPostUpdateWithNestedWhereUniqueInput>;
	CardsContainer?: InputMaybe<CardsContainerUpdateWithNestedWhereUniqueInput>;
	CtaLink?: InputMaybe<CtaLinkUpdateWithNestedWhereUniqueInput>;
	Divider?: InputMaybe<DividerUpdateWithNestedWhereUniqueInput>;
	Eyecatcher?: InputMaybe<EyecatcherUpdateWithNestedWhereUniqueInput>;
	HeroImage?: InputMaybe<HeroImageUpdateWithNestedWhereUniqueInput>;
	Image?: InputMaybe<ImageUpdateWithNestedWhereUniqueInput>;
	ReferencesContainer?: InputMaybe<ReferencesContainerUpdateWithNestedWhereUniqueInput>;
	Text?: InputMaybe<TextUpdateWithNestedWhereUniqueInput>;
};

export type PageModulUpsertWithNestedWhereUniqueInput = {
	AccordionContainer?: InputMaybe<AccordionContainerUpsertWithNestedWhereUniqueInput>;
	AssetLink?: InputMaybe<AssetLinkUpsertWithNestedWhereUniqueInput>;
	BlogPost?: InputMaybe<BlogPostUpsertWithNestedWhereUniqueInput>;
	CardsContainer?: InputMaybe<CardsContainerUpsertWithNestedWhereUniqueInput>;
	CtaLink?: InputMaybe<CtaLinkUpsertWithNestedWhereUniqueInput>;
	Divider?: InputMaybe<DividerUpsertWithNestedWhereUniqueInput>;
	Eyecatcher?: InputMaybe<EyecatcherUpsertWithNestedWhereUniqueInput>;
	HeroImage?: InputMaybe<HeroImageUpsertWithNestedWhereUniqueInput>;
	Image?: InputMaybe<ImageUpsertWithNestedWhereUniqueInput>;
	ReferencesContainer?: InputMaybe<ReferencesContainerUpsertWithNestedWhereUniqueInput>;
	Text?: InputMaybe<TextUpsertWithNestedWhereUniqueInput>;
};

export type PageModulWhereInput = {
	AccordionContainer?: InputMaybe<AccordionContainerWhereInput>;
	AssetLink?: InputMaybe<AssetLinkWhereInput>;
	BlogPost?: InputMaybe<BlogPostWhereInput>;
	CardsContainer?: InputMaybe<CardsContainerWhereInput>;
	CtaLink?: InputMaybe<CtaLinkWhereInput>;
	Divider?: InputMaybe<DividerWhereInput>;
	Eyecatcher?: InputMaybe<EyecatcherWhereInput>;
	HeroImage?: InputMaybe<HeroImageWhereInput>;
	Image?: InputMaybe<ImageWhereInput>;
	ReferencesContainer?: InputMaybe<ReferencesContainerWhereInput>;
	Text?: InputMaybe<TextWhereInput>;
};

export type PageModulWhereUniqueInput = {
	AccordionContainer?: InputMaybe<AccordionContainerWhereUniqueInput>;
	AssetLink?: InputMaybe<AssetLinkWhereUniqueInput>;
	BlogPost?: InputMaybe<BlogPostWhereUniqueInput>;
	CardsContainer?: InputMaybe<CardsContainerWhereUniqueInput>;
	CtaLink?: InputMaybe<CtaLinkWhereUniqueInput>;
	Divider?: InputMaybe<DividerWhereUniqueInput>;
	Eyecatcher?: InputMaybe<EyecatcherWhereUniqueInput>;
	HeroImage?: InputMaybe<HeroImageWhereUniqueInput>;
	Image?: InputMaybe<ImageWhereUniqueInput>;
	ReferencesContainer?: InputMaybe<ReferencesContainerWhereUniqueInput>;
	Text?: InputMaybe<TextWhereUniqueInput>;
};

export type PageMultiplemodulsperpage = CtaLink | Divider;

export type PageMultiplemodulsperpageConnectInput = {
	CtaLink?: InputMaybe<CtaLinkConnectInput>;
	Divider?: InputMaybe<DividerConnectInput>;
};

export type PageMultiplemodulsperpageCreateInput = {
	CtaLink?: InputMaybe<CtaLinkCreateInput>;
	Divider?: InputMaybe<DividerCreateInput>;
};

export type PageMultiplemodulsperpageCreateManyInlineInput = {
	/** Connect multiple existing PageMultiplemodulsperpage documents */
	connect?: InputMaybe<Array<PageMultiplemodulsperpageWhereUniqueInput>>;
	/** Create and connect multiple existing PageMultiplemodulsperpage documents */
	create?: InputMaybe<Array<PageMultiplemodulsperpageCreateInput>>;
};

export type PageMultiplemodulsperpageCreateOneInlineInput = {
	/** Connect one existing PageMultiplemodulsperpage document */
	connect?: InputMaybe<PageMultiplemodulsperpageWhereUniqueInput>;
	/** Create and connect one PageMultiplemodulsperpage document */
	create?: InputMaybe<PageMultiplemodulsperpageCreateInput>;
};

export type PageMultiplemodulsperpageUpdateInput = {
	CtaLink?: InputMaybe<CtaLinkUpdateInput>;
	Divider?: InputMaybe<DividerUpdateInput>;
};

export type PageMultiplemodulsperpageUpdateManyInlineInput = {
	/** Connect multiple existing PageMultiplemodulsperpage documents */
	connect?: InputMaybe<Array<PageMultiplemodulsperpageConnectInput>>;
	/** Create and connect multiple PageMultiplemodulsperpage documents */
	create?: InputMaybe<Array<PageMultiplemodulsperpageCreateInput>>;
	/** Delete multiple PageMultiplemodulsperpage documents */
	delete?: InputMaybe<Array<PageMultiplemodulsperpageWhereUniqueInput>>;
	/** Disconnect multiple PageMultiplemodulsperpage documents */
	disconnect?: InputMaybe<Array<PageMultiplemodulsperpageWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing PageMultiplemodulsperpage documents */
	set?: InputMaybe<Array<PageMultiplemodulsperpageWhereUniqueInput>>;
	/** Update multiple PageMultiplemodulsperpage documents */
	update?: InputMaybe<Array<PageMultiplemodulsperpageUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple PageMultiplemodulsperpage documents */
	upsert?: InputMaybe<Array<PageMultiplemodulsperpageUpsertWithNestedWhereUniqueInput>>;
};

export type PageMultiplemodulsperpageUpdateManyWithNestedWhereInput = {
	CtaLink?: InputMaybe<CtaLinkUpdateManyWithNestedWhereInput>;
	Divider?: InputMaybe<DividerUpdateManyWithNestedWhereInput>;
};

export type PageMultiplemodulsperpageUpdateOneInlineInput = {
	/** Connect existing PageMultiplemodulsperpage document */
	connect?: InputMaybe<PageMultiplemodulsperpageWhereUniqueInput>;
	/** Create and connect one PageMultiplemodulsperpage document */
	create?: InputMaybe<PageMultiplemodulsperpageCreateInput>;
	/** Delete currently connected PageMultiplemodulsperpage document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected PageMultiplemodulsperpage document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single PageMultiplemodulsperpage document */
	update?: InputMaybe<PageMultiplemodulsperpageUpdateWithNestedWhereUniqueInput>;
	/** Upsert single PageMultiplemodulsperpage document */
	upsert?: InputMaybe<PageMultiplemodulsperpageUpsertWithNestedWhereUniqueInput>;
};

export type PageMultiplemodulsperpageUpdateWithNestedWhereUniqueInput = {
	CtaLink?: InputMaybe<CtaLinkUpdateWithNestedWhereUniqueInput>;
	Divider?: InputMaybe<DividerUpdateWithNestedWhereUniqueInput>;
};

export type PageMultiplemodulsperpageUpsertWithNestedWhereUniqueInput = {
	CtaLink?: InputMaybe<CtaLinkUpsertWithNestedWhereUniqueInput>;
	Divider?: InputMaybe<DividerUpsertWithNestedWhereUniqueInput>;
};

export type PageMultiplemodulsperpageWhereInput = {
	CtaLink?: InputMaybe<CtaLinkWhereInput>;
	Divider?: InputMaybe<DividerWhereInput>;
};

export type PageMultiplemodulsperpageWhereUniqueInput = {
	CtaLink?: InputMaybe<CtaLinkWhereUniqueInput>;
	Divider?: InputMaybe<DividerWhereUniqueInput>;
};

export enum PageOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	SlugAsc = 'slug_ASC',
	SlugDesc = 'slug_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type PageUpdateInput = {
	manytomanymodulsperpage?: InputMaybe<PageMultiplemodulsperpageUpdateManyInlineInput>;
	modules?: InputMaybe<PageModulUpdateManyInlineInput>;
	slug?: InputMaybe<Scalars['String']>;
	source?: InputMaybe<LinkUpdateOneInlineInput>;
};

export type PageUpdateManyInlineInput = {
	/** Connect multiple existing Page documents */
	connect?: InputMaybe<Array<PageConnectInput>>;
	/** Create and connect multiple Page documents */
	create?: InputMaybe<Array<PageCreateInput>>;
	/** Delete multiple Page documents */
	delete?: InputMaybe<Array<PageWhereUniqueInput>>;
	/** Disconnect multiple Page documents */
	disconnect?: InputMaybe<Array<PageWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Page documents */
	set?: InputMaybe<Array<PageWhereUniqueInput>>;
	/** Update multiple Page documents */
	update?: InputMaybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Page documents */
	upsert?: InputMaybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
	/** No fields in updateMany data input */
	_?: InputMaybe<Scalars['String']>;
};

export type PageUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: PageUpdateManyInput;
	/** Document search */
	where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
	/** Connect existing Page document */
	connect?: InputMaybe<PageWhereUniqueInput>;
	/** Create and connect one Page document */
	create?: InputMaybe<PageCreateInput>;
	/** Delete currently connected Page document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected Page document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single Page document */
	update?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Page document */
	upsert?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: PageUpdateInput;
	/** Unique document search */
	where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
	/** Create document if it didn't exist */
	create: PageCreateInput;
	/** Update document if it exists */
	update: PageUpdateInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: PageUpsertInput;
	/** Unique document search */
	where: PageWhereUniqueInput;
};

/** Identifies documents */
export type PageWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<PageWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<PageWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<PageWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	slug?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	slug_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	slug_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	slug_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	slug_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	slug_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	slug_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	slug_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	slug_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	slug_starts_with?: InputMaybe<Scalars['String']>;
	source?: InputMaybe<LinkWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
	slug?: InputMaybe<Scalars['String']>;
};

export type PublishLocaleInput = {
	/** Locales to publish */
	locale: Locale;
	/** Stages to publish selected locales to */
	stages: Array<Stage>;
};

export type Query = {
	__typename?: 'Query';
	/** Retrieve a single accordionContainer */
	accordionContainer?: Maybe<AccordionContainer>;
	/** Retrieve document version */
	accordionContainerVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple accordionContainers */
	accordionContainers: Array<AccordionContainer>;
	/** Retrieve multiple accordionContainers using the Relay connection interface */
	accordionContainersConnection: AccordionContainerConnection;
	/** Retrieve a single accordionItem */
	accordionItem?: Maybe<AccordionItem>;
	/** Retrieve document version */
	accordionItemVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple accordionItems */
	accordionItems: Array<AccordionItem>;
	/** Retrieve multiple accordionItems using the Relay connection interface */
	accordionItemsConnection: AccordionItemConnection;
	/** Retrieve a single asset */
	asset?: Maybe<Asset>;
	/** Retrieve a single assetLink */
	assetLink?: Maybe<AssetLink>;
	/** Retrieve document version */
	assetLinkVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple assetLinks */
	assetLinks: Array<AssetLink>;
	/** Retrieve multiple assetLinks using the Relay connection interface */
	assetLinksConnection: AssetLinkConnection;
	/** Retrieve document version */
	assetVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple assets */
	assets: Array<Asset>;
	/** Retrieve multiple assets using the Relay connection interface */
	assetsConnection: AssetConnection;
	/** Retrieve a single blogPost */
	blogPost?: Maybe<BlogPost>;
	/** Retrieve document version */
	blogPostVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple blogPosts */
	blogPosts: Array<BlogPost>;
	/** Retrieve multiple blogPosts using the Relay connection interface */
	blogPostsConnection: BlogPostConnection;
	/** Retrieve a single cardIcon */
	cardIcon?: Maybe<CardIcon>;
	/** Retrieve document version */
	cardIconVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple cardIcons */
	cardIcons: Array<CardIcon>;
	/** Retrieve multiple cardIcons using the Relay connection interface */
	cardIconsConnection: CardIconConnection;
	/** Retrieve a single cardImage */
	cardImage?: Maybe<CardImage>;
	/** Retrieve document version */
	cardImageVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple cardImages */
	cardImages: Array<CardImage>;
	/** Retrieve multiple cardImages using the Relay connection interface */
	cardImagesConnection: CardImageConnection;
	/** Retrieve a single cardsContainer */
	cardsContainer?: Maybe<CardsContainer>;
	/** Retrieve document version */
	cardsContainerVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple cardsContainers */
	cardsContainers: Array<CardsContainer>;
	/** Retrieve multiple cardsContainers using the Relay connection interface */
	cardsContainersConnection: CardsContainerConnection;
	/** Retrieve a single ctaLink */
	ctaLink?: Maybe<CtaLink>;
	/** Retrieve document version */
	ctaLinkVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple ctaLinks */
	ctaLinks: Array<CtaLink>;
	/** Retrieve multiple ctaLinks using the Relay connection interface */
	ctaLinksConnection: CtaLinkConnection;
	/** Retrieve a single divider */
	divider?: Maybe<Divider>;
	/** Retrieve document version */
	dividerVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple dividers */
	dividers: Array<Divider>;
	/** Retrieve multiple dividers using the Relay connection interface */
	dividersConnection: DividerConnection;
	/** Retrieve a single eyecatcher */
	eyecatcher?: Maybe<Eyecatcher>;
	/** Retrieve document version */
	eyecatcherVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple eyecatchers */
	eyecatchers: Array<Eyecatcher>;
	/** Retrieve multiple eyecatchers using the Relay connection interface */
	eyecatchersConnection: EyecatcherConnection;
	/** Retrieve a single heroImage */
	heroImage?: Maybe<HeroImage>;
	/** Retrieve document version */
	heroImageVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple heroImages */
	heroImages: Array<HeroImage>;
	/** Retrieve multiple heroImages using the Relay connection interface */
	heroImagesConnection: HeroImageConnection;
	/** Retrieve a single image */
	image?: Maybe<Image>;
	/** Retrieve document version */
	imageVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple images */
	images: Array<Image>;
	/** Retrieve multiple images using the Relay connection interface */
	imagesConnection: ImageConnection;
	/** Retrieve a single link */
	link?: Maybe<Link>;
	/** Retrieve document version */
	linkVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple links */
	links: Array<Link>;
	/** Retrieve multiple links using the Relay connection interface */
	linksConnection: LinkConnection;
	/** Fetches an object given its ID */
	node?: Maybe<Node>;
	/** Retrieve a single page */
	page?: Maybe<Page>;
	/** Retrieve document version */
	pageVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple pages */
	pages: Array<Page>;
	/** Retrieve multiple pages using the Relay connection interface */
	pagesConnection: PageConnection;
	/** Retrieve a single referencesContainer */
	referencesContainer?: Maybe<ReferencesContainer>;
	/** Retrieve document version */
	referencesContainerVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple referencesContainers */
	referencesContainers: Array<ReferencesContainer>;
	/** Retrieve multiple referencesContainers using the Relay connection interface */
	referencesContainersConnection: ReferencesContainerConnection;
	/** Retrieve a single referencesItem */
	referencesItem?: Maybe<ReferencesItem>;
	/** Retrieve document version */
	referencesItemVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple referencesItems */
	referencesItems: Array<ReferencesItem>;
	/** Retrieve multiple referencesItems using the Relay connection interface */
	referencesItemsConnection: ReferencesItemConnection;
	/** Retrieve a single scheduledOperation */
	scheduledOperation?: Maybe<ScheduledOperation>;
	/** Retrieve multiple scheduledOperations */
	scheduledOperations: Array<ScheduledOperation>;
	/** Retrieve multiple scheduledOperations using the Relay connection interface */
	scheduledOperationsConnection: ScheduledOperationConnection;
	/** Retrieve a single scheduledRelease */
	scheduledRelease?: Maybe<ScheduledRelease>;
	/** Retrieve multiple scheduledReleases */
	scheduledReleases: Array<ScheduledRelease>;
	/** Retrieve multiple scheduledReleases using the Relay connection interface */
	scheduledReleasesConnection: ScheduledReleaseConnection;
	/** Retrieve a single text */
	text?: Maybe<Text>;
	/** Retrieve document version */
	textVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple texts */
	texts: Array<Text>;
	/** Retrieve multiple texts using the Relay connection interface */
	textsConnection: TextConnection;
	/** Retrieve a single user */
	user?: Maybe<User>;
	/** Retrieve multiple users */
	users: Array<User>;
	/** Retrieve multiple users using the Relay connection interface */
	usersConnection: UserConnection;
};

export type QueryAccordionContainerArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: AccordionContainerWhereUniqueInput;
};

export type QueryAccordionContainerVersionArgs = {
	where: VersionWhereInput;
};

export type QueryAccordionContainersArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<AccordionContainerOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<AccordionContainerWhereInput>;
};

export type QueryAccordionContainersConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<AccordionContainerOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<AccordionContainerWhereInput>;
};

export type QueryAccordionItemArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: AccordionItemWhereUniqueInput;
};

export type QueryAccordionItemVersionArgs = {
	where: VersionWhereInput;
};

export type QueryAccordionItemsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<AccordionItemOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<AccordionItemWhereInput>;
};

export type QueryAccordionItemsConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<AccordionItemOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<AccordionItemWhereInput>;
};

export type QueryAssetArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: AssetWhereUniqueInput;
};

export type QueryAssetLinkArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: AssetLinkWhereUniqueInput;
};

export type QueryAssetLinkVersionArgs = {
	where: VersionWhereInput;
};

export type QueryAssetLinksArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<AssetLinkOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<AssetLinkWhereInput>;
};

export type QueryAssetLinksConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<AssetLinkOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<AssetLinkWhereInput>;
};

export type QueryAssetVersionArgs = {
	where: VersionWhereInput;
};

export type QueryAssetsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<AssetOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<AssetWhereInput>;
};

export type QueryAssetsConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<AssetOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<AssetWhereInput>;
};

export type QueryBlogPostArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: BlogPostWhereUniqueInput;
};

export type QueryBlogPostVersionArgs = {
	where: VersionWhereInput;
};

export type QueryBlogPostsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<BlogPostOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<BlogPostWhereInput>;
};

export type QueryBlogPostsConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<BlogPostOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<BlogPostWhereInput>;
};

export type QueryCardIconArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: CardIconWhereUniqueInput;
};

export type QueryCardIconVersionArgs = {
	where: VersionWhereInput;
};

export type QueryCardIconsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<CardIconOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<CardIconWhereInput>;
};

export type QueryCardIconsConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<CardIconOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<CardIconWhereInput>;
};

export type QueryCardImageArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: CardImageWhereUniqueInput;
};

export type QueryCardImageVersionArgs = {
	where: VersionWhereInput;
};

export type QueryCardImagesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<CardImageOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<CardImageWhereInput>;
};

export type QueryCardImagesConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<CardImageOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<CardImageWhereInput>;
};

export type QueryCardsContainerArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: CardsContainerWhereUniqueInput;
};

export type QueryCardsContainerVersionArgs = {
	where: VersionWhereInput;
};

export type QueryCardsContainersArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<CardsContainerOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<CardsContainerWhereInput>;
};

export type QueryCardsContainersConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<CardsContainerOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<CardsContainerWhereInput>;
};

export type QueryCtaLinkArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: CtaLinkWhereUniqueInput;
};

export type QueryCtaLinkVersionArgs = {
	where: VersionWhereInput;
};

export type QueryCtaLinksArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<CtaLinkOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<CtaLinkWhereInput>;
};

export type QueryCtaLinksConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<CtaLinkOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<CtaLinkWhereInput>;
};

export type QueryDividerArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: DividerWhereUniqueInput;
};

export type QueryDividerVersionArgs = {
	where: VersionWhereInput;
};

export type QueryDividersArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<DividerOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<DividerWhereInput>;
};

export type QueryDividersConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<DividerOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<DividerWhereInput>;
};

export type QueryEyecatcherArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: EyecatcherWhereUniqueInput;
};

export type QueryEyecatcherVersionArgs = {
	where: VersionWhereInput;
};

export type QueryEyecatchersArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<EyecatcherOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<EyecatcherWhereInput>;
};

export type QueryEyecatchersConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<EyecatcherOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<EyecatcherWhereInput>;
};

export type QueryHeroImageArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: HeroImageWhereUniqueInput;
};

export type QueryHeroImageVersionArgs = {
	where: VersionWhereInput;
};

export type QueryHeroImagesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<HeroImageOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<HeroImageWhereInput>;
};

export type QueryHeroImagesConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<HeroImageOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<HeroImageWhereInput>;
};

export type QueryImageArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: ImageWhereUniqueInput;
};

export type QueryImageVersionArgs = {
	where: VersionWhereInput;
};

export type QueryImagesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ImageOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<ImageWhereInput>;
};

export type QueryImagesConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ImageOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<ImageWhereInput>;
};

export type QueryLinkArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: LinkWhereUniqueInput;
};

export type QueryLinkVersionArgs = {
	where: VersionWhereInput;
};

export type QueryLinksArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<LinkOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<LinkWhereInput>;
};

export type QueryLinksConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<LinkOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<LinkWhereInput>;
};

export type QueryNodeArgs = {
	id: Scalars['ID'];
	locales?: Array<Locale>;
	stage?: Stage;
};

export type QueryPageArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: PageWhereUniqueInput;
};

export type QueryPageVersionArgs = {
	where: VersionWhereInput;
};

export type QueryPagesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<PageOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<PageWhereInput>;
};

export type QueryPagesConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<PageOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<PageWhereInput>;
};

export type QueryReferencesContainerArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: ReferencesContainerWhereUniqueInput;
};

export type QueryReferencesContainerVersionArgs = {
	where: VersionWhereInput;
};

export type QueryReferencesContainersArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ReferencesContainerOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<ReferencesContainerWhereInput>;
};

export type QueryReferencesContainersConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ReferencesContainerOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<ReferencesContainerWhereInput>;
};

export type QueryReferencesItemArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: ReferencesItemWhereUniqueInput;
};

export type QueryReferencesItemVersionArgs = {
	where: VersionWhereInput;
};

export type QueryReferencesItemsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ReferencesItemOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<ReferencesItemWhereInput>;
};

export type QueryReferencesItemsConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ReferencesItemOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<ReferencesItemWhereInput>;
};

export type QueryScheduledOperationArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: ScheduledOperationWhereUniqueInput;
};

export type QueryScheduledOperationsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledOperationsConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledReleaseArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: ScheduledReleaseWhereUniqueInput;
};

export type QueryScheduledReleasesArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryScheduledReleasesConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryTextArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: TextWhereUniqueInput;
};

export type QueryTextVersionArgs = {
	where: VersionWhereInput;
};

export type QueryTextsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<TextOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<TextWhereInput>;
};

export type QueryTextsConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<TextOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<TextWhereInput>;
};

export type QueryUserArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<UserOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<UserOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
	__typename?: 'RGBA';
	a: Scalars['RGBATransparency'];
	b: Scalars['RGBAHue'];
	g: Scalars['RGBAHue'];
	r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
	a: Scalars['RGBATransparency'];
	b: Scalars['RGBAHue'];
	g: Scalars['RGBAHue'];
	r: Scalars['RGBAHue'];
};

export type ReferencesContainer = Node & {
	__typename?: 'ReferencesContainer';
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Get the document in other stages */
	documentInStages: Array<ReferencesContainer>;
	/** List of ReferencesContainer versions */
	history: Array<Version>;
	/** The unique identifier */
	id: Scalars['ID'];
	page?: Maybe<Page>;
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	referenceItems: Array<ReferencesItem>;
	scheduledIn: Array<ScheduledOperation>;
	/** System stage field */
	stage: Stage;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

export type ReferencesContainerCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ReferencesContainerDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

export type ReferencesContainerHistoryArgs = {
	limit?: Scalars['Int'];
	skip?: Scalars['Int'];
	stageOverride?: InputMaybe<Stage>;
};

export type ReferencesContainerPageArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ReferencesContainerPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ReferencesContainerReferenceItemsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<ReferencesItemOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ReferencesItemWhereInput>;
};

export type ReferencesContainerScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ReferencesContainerUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ReferencesContainerConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ReferencesContainerWhereUniqueInput;
};

/** A connection to a list of items. */
export type ReferencesContainerConnection = {
	__typename?: 'ReferencesContainerConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<ReferencesContainerEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type ReferencesContainerCreateInput = {
	createdAt?: InputMaybe<Scalars['DateTime']>;
	page?: InputMaybe<PageCreateOneInlineInput>;
	referenceItems?: InputMaybe<ReferencesItemCreateManyInlineInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ReferencesContainerCreateManyInlineInput = {
	/** Connect multiple existing ReferencesContainer documents */
	connect?: InputMaybe<Array<ReferencesContainerWhereUniqueInput>>;
	/** Create and connect multiple existing ReferencesContainer documents */
	create?: InputMaybe<Array<ReferencesContainerCreateInput>>;
};

export type ReferencesContainerCreateOneInlineInput = {
	/** Connect one existing ReferencesContainer document */
	connect?: InputMaybe<ReferencesContainerWhereUniqueInput>;
	/** Create and connect one ReferencesContainer document */
	create?: InputMaybe<ReferencesContainerCreateInput>;
};

/** An edge in a connection. */
export type ReferencesContainerEdge = {
	__typename?: 'ReferencesContainerEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: ReferencesContainer;
};

/** Identifies documents */
export type ReferencesContainerManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ReferencesContainerWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ReferencesContainerWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ReferencesContainerWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	page?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	referenceItems_every?: InputMaybe<ReferencesItemWhereInput>;
	referenceItems_none?: InputMaybe<ReferencesItemWhereInput>;
	referenceItems_some?: InputMaybe<ReferencesItemWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ReferencesContainerOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type ReferencesContainerUpdateInput = {
	page?: InputMaybe<PageUpdateOneInlineInput>;
	referenceItems?: InputMaybe<ReferencesItemUpdateManyInlineInput>;
};

export type ReferencesContainerUpdateManyInlineInput = {
	/** Connect multiple existing ReferencesContainer documents */
	connect?: InputMaybe<Array<ReferencesContainerConnectInput>>;
	/** Create and connect multiple ReferencesContainer documents */
	create?: InputMaybe<Array<ReferencesContainerCreateInput>>;
	/** Delete multiple ReferencesContainer documents */
	delete?: InputMaybe<Array<ReferencesContainerWhereUniqueInput>>;
	/** Disconnect multiple ReferencesContainer documents */
	disconnect?: InputMaybe<Array<ReferencesContainerWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing ReferencesContainer documents */
	set?: InputMaybe<Array<ReferencesContainerWhereUniqueInput>>;
	/** Update multiple ReferencesContainer documents */
	update?: InputMaybe<Array<ReferencesContainerUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple ReferencesContainer documents */
	upsert?: InputMaybe<Array<ReferencesContainerUpsertWithNestedWhereUniqueInput>>;
};

export type ReferencesContainerUpdateManyInput = {
	/** No fields in updateMany data input */
	_?: InputMaybe<Scalars['String']>;
};

export type ReferencesContainerUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: ReferencesContainerUpdateManyInput;
	/** Document search */
	where: ReferencesContainerWhereInput;
};

export type ReferencesContainerUpdateOneInlineInput = {
	/** Connect existing ReferencesContainer document */
	connect?: InputMaybe<ReferencesContainerWhereUniqueInput>;
	/** Create and connect one ReferencesContainer document */
	create?: InputMaybe<ReferencesContainerCreateInput>;
	/** Delete currently connected ReferencesContainer document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected ReferencesContainer document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single ReferencesContainer document */
	update?: InputMaybe<ReferencesContainerUpdateWithNestedWhereUniqueInput>;
	/** Upsert single ReferencesContainer document */
	upsert?: InputMaybe<ReferencesContainerUpsertWithNestedWhereUniqueInput>;
};

export type ReferencesContainerUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: ReferencesContainerUpdateInput;
	/** Unique document search */
	where: ReferencesContainerWhereUniqueInput;
};

export type ReferencesContainerUpsertInput = {
	/** Create document if it didn't exist */
	create: ReferencesContainerCreateInput;
	/** Update document if it exists */
	update: ReferencesContainerUpdateInput;
};

export type ReferencesContainerUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: ReferencesContainerUpsertInput;
	/** Unique document search */
	where: ReferencesContainerWhereUniqueInput;
};

/** Identifies documents */
export type ReferencesContainerWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ReferencesContainerWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ReferencesContainerWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ReferencesContainerWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	page?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	referenceItems_every?: InputMaybe<ReferencesItemWhereInput>;
	referenceItems_none?: InputMaybe<ReferencesItemWhereInput>;
	referenceItems_some?: InputMaybe<ReferencesItemWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ReferencesContainer record uniquely */
export type ReferencesContainerWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
};

export type ReferencesItem = Node & {
	__typename?: 'ReferencesItem';
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Get the document in other stages */
	documentInStages: Array<ReferencesItem>;
	/** List of ReferencesItem versions */
	history: Array<Version>;
	/** The unique identifier */
	id: Scalars['ID'];
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	referenceLogo?: Maybe<Asset>;
	scheduledIn: Array<ScheduledOperation>;
	/** System stage field */
	stage: Stage;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

export type ReferencesItemCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ReferencesItemDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

export type ReferencesItemHistoryArgs = {
	limit?: Scalars['Int'];
	skip?: Scalars['Int'];
	stageOverride?: InputMaybe<Stage>;
};

export type ReferencesItemPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ReferencesItemReferenceLogoArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ReferencesItemScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ReferencesItemUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ReferencesItemConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ReferencesItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type ReferencesItemConnection = {
	__typename?: 'ReferencesItemConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<ReferencesItemEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type ReferencesItemCreateInput = {
	ckzzj0qyr7rbe01z88y4x8h68?: InputMaybe<ReferencesContainerCreateManyInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	referenceLogo?: InputMaybe<AssetCreateOneInlineInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ReferencesItemCreateManyInlineInput = {
	/** Connect multiple existing ReferencesItem documents */
	connect?: InputMaybe<Array<ReferencesItemWhereUniqueInput>>;
	/** Create and connect multiple existing ReferencesItem documents */
	create?: InputMaybe<Array<ReferencesItemCreateInput>>;
};

export type ReferencesItemCreateOneInlineInput = {
	/** Connect one existing ReferencesItem document */
	connect?: InputMaybe<ReferencesItemWhereUniqueInput>;
	/** Create and connect one ReferencesItem document */
	create?: InputMaybe<ReferencesItemCreateInput>;
};

/** An edge in a connection. */
export type ReferencesItemEdge = {
	__typename?: 'ReferencesItemEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: ReferencesItem;
};

/** Identifies documents */
export type ReferencesItemManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ReferencesItemWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ReferencesItemWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ReferencesItemWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	referenceLogo?: InputMaybe<AssetWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ReferencesItemOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type ReferencesItemUpdateInput = {
	ckzzj0qyr7rbe01z88y4x8h68?: InputMaybe<ReferencesContainerUpdateManyInlineInput>;
	referenceLogo?: InputMaybe<AssetUpdateOneInlineInput>;
};

export type ReferencesItemUpdateManyInlineInput = {
	/** Connect multiple existing ReferencesItem documents */
	connect?: InputMaybe<Array<ReferencesItemConnectInput>>;
	/** Create and connect multiple ReferencesItem documents */
	create?: InputMaybe<Array<ReferencesItemCreateInput>>;
	/** Delete multiple ReferencesItem documents */
	delete?: InputMaybe<Array<ReferencesItemWhereUniqueInput>>;
	/** Disconnect multiple ReferencesItem documents */
	disconnect?: InputMaybe<Array<ReferencesItemWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing ReferencesItem documents */
	set?: InputMaybe<Array<ReferencesItemWhereUniqueInput>>;
	/** Update multiple ReferencesItem documents */
	update?: InputMaybe<Array<ReferencesItemUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple ReferencesItem documents */
	upsert?: InputMaybe<Array<ReferencesItemUpsertWithNestedWhereUniqueInput>>;
};

export type ReferencesItemUpdateManyInput = {
	/** No fields in updateMany data input */
	_?: InputMaybe<Scalars['String']>;
};

export type ReferencesItemUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: ReferencesItemUpdateManyInput;
	/** Document search */
	where: ReferencesItemWhereInput;
};

export type ReferencesItemUpdateOneInlineInput = {
	/** Connect existing ReferencesItem document */
	connect?: InputMaybe<ReferencesItemWhereUniqueInput>;
	/** Create and connect one ReferencesItem document */
	create?: InputMaybe<ReferencesItemCreateInput>;
	/** Delete currently connected ReferencesItem document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected ReferencesItem document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single ReferencesItem document */
	update?: InputMaybe<ReferencesItemUpdateWithNestedWhereUniqueInput>;
	/** Upsert single ReferencesItem document */
	upsert?: InputMaybe<ReferencesItemUpsertWithNestedWhereUniqueInput>;
};

export type ReferencesItemUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: ReferencesItemUpdateInput;
	/** Unique document search */
	where: ReferencesItemWhereUniqueInput;
};

export type ReferencesItemUpsertInput = {
	/** Create document if it didn't exist */
	create: ReferencesItemCreateInput;
	/** Update document if it exists */
	update: ReferencesItemUpdateInput;
};

export type ReferencesItemUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: ReferencesItemUpsertInput;
	/** Unique document search */
	where: ReferencesItemWhereUniqueInput;
};

/** Identifies documents */
export type ReferencesItemWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ReferencesItemWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ReferencesItemWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ReferencesItemWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	referenceLogo?: InputMaybe<AssetWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ReferencesItem record uniquely */
export type ReferencesItemWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
	__typename?: 'RichText';
	/** Returns HTMl representation */
	html: Scalars['String'];
	/** Returns Markdown representation */
	markdown: Scalars['String'];
	/** Returns AST representation */
	raw: Scalars['RichTextAST'];
	/** Returns plain-text contents of RichText */
	text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
	__typename?: 'ScheduledOperation';
	affectedDocuments: Array<ScheduledOperationAffectedDocument>;
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Operation description */
	description?: Maybe<Scalars['String']>;
	/** Get the document in other stages */
	documentInStages: Array<ScheduledOperation>;
	/** Operation error message */
	errorMessage?: Maybe<Scalars['String']>;
	/** The unique identifier */
	id: Scalars['ID'];
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	/** Raw operation payload including all details, this field is subject to change */
	rawPayload: Scalars['Json'];
	/** The release this operation is scheduled for */
	release?: Maybe<ScheduledRelease>;
	/** System stage field */
	stage: Stage;
	/** operation Status */
	status: ScheduledOperationStatus;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
};

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument =
	| AccordionContainer
	| AccordionItem
	| Asset
	| AssetLink
	| BlogPost
	| CardIcon
	| CardImage
	| CardsContainer
	| CtaLink
	| Divider
	| Eyecatcher
	| HeroImage
	| Image
	| Link
	| Page
	| ReferencesContainer
	| ReferencesItem
	| Text;

export type ScheduledOperationConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
	__typename?: 'ScheduledOperationConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<ScheduledOperationEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
	/** Connect multiple existing ScheduledOperation documents */
	connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
	/** Connect one existing ScheduledOperation document */
	connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
	__typename?: 'ScheduledOperationEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	description_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']>;
	errorMessage?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	errorMessage_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	release?: InputMaybe<ScheduledReleaseWhereInput>;
	status?: InputMaybe<ScheduledOperationStatus>;
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
	/** All values that are not equal to given value. */
	status_not?: InputMaybe<ScheduledOperationStatus>;
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	DescriptionAsc = 'description_ASC',
	DescriptionDesc = 'description_DESC',
	ErrorMessageAsc = 'errorMessage_ASC',
	ErrorMessageDesc = 'errorMessage_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	StatusAsc = 'status_ASC',
	StatusDesc = 'status_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
	Canceled = 'CANCELED',
	Completed = 'COMPLETED',
	Failed = 'FAILED',
	InProgress = 'IN_PROGRESS',
	Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
	/** Connect multiple existing ScheduledOperation documents */
	connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
	/** Disconnect multiple ScheduledOperation documents */
	disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing ScheduledOperation documents */
	set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
	/** Connect existing ScheduledOperation document */
	connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
	/** Disconnect currently connected ScheduledOperation document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	description_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']>;
	errorMessage?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	errorMessage_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	release?: InputMaybe<ScheduledReleaseWhereInput>;
	status?: InputMaybe<ScheduledOperationStatus>;
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
	/** All values that are not equal to given value. */
	status_not?: InputMaybe<ScheduledOperationStatus>;
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
	__typename?: 'ScheduledRelease';
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Release description */
	description?: Maybe<Scalars['String']>;
	/** Get the document in other stages */
	documentInStages: Array<ScheduledRelease>;
	/** Release error message */
	errorMessage?: Maybe<Scalars['String']>;
	/** The unique identifier */
	id: Scalars['ID'];
	/** Whether scheduled release should be run */
	isActive: Scalars['Boolean'];
	/** Whether scheduled release is implicit */
	isImplicit: Scalars['Boolean'];
	/** Operations to run with this release */
	operations: Array<ScheduledOperation>;
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	/** Release date and time */
	releaseAt?: Maybe<Scalars['DateTime']>;
	/** System stage field */
	stage: Stage;
	/** Release Status */
	status: ScheduledReleaseStatus;
	/** Release Title */
	title?: Maybe<Scalars['String']>;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
	__typename?: 'ScheduledReleaseConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<ScheduledReleaseEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
	createdAt?: InputMaybe<Scalars['DateTime']>;
	description?: InputMaybe<Scalars['String']>;
	errorMessage?: InputMaybe<Scalars['String']>;
	isActive?: InputMaybe<Scalars['Boolean']>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	title?: InputMaybe<Scalars['String']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
	/** Connect multiple existing ScheduledRelease documents */
	connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
	/** Create and connect multiple existing ScheduledRelease documents */
	create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
	/** Connect one existing ScheduledRelease document */
	connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
	/** Create and connect one ScheduledRelease document */
	create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
	__typename?: 'ScheduledReleaseEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	description_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']>;
	errorMessage?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	errorMessage_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	isActive?: InputMaybe<Scalars['Boolean']>;
	/** All values that are not equal to given value. */
	isActive_not?: InputMaybe<Scalars['Boolean']>;
	isImplicit?: InputMaybe<Scalars['Boolean']>;
	/** All values that are not equal to given value. */
	isImplicit_not?: InputMaybe<Scalars['Boolean']>;
	operations_every?: InputMaybe<ScheduledOperationWhereInput>;
	operations_none?: InputMaybe<ScheduledOperationWhereInput>;
	operations_some?: InputMaybe<ScheduledOperationWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	releaseAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	status?: InputMaybe<ScheduledReleaseStatus>;
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
	/** All values that are not equal to given value. */
	status_not?: InputMaybe<ScheduledReleaseStatus>;
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
	title?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	title_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	DescriptionAsc = 'description_ASC',
	DescriptionDesc = 'description_DESC',
	ErrorMessageAsc = 'errorMessage_ASC',
	ErrorMessageDesc = 'errorMessage_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	IsActiveAsc = 'isActive_ASC',
	IsActiveDesc = 'isActive_DESC',
	IsImplicitAsc = 'isImplicit_ASC',
	IsImplicitDesc = 'isImplicit_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	ReleaseAtAsc = 'releaseAt_ASC',
	ReleaseAtDesc = 'releaseAt_DESC',
	StatusAsc = 'status_ASC',
	StatusDesc = 'status_DESC',
	TitleAsc = 'title_ASC',
	TitleDesc = 'title_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
	Completed = 'COMPLETED',
	Failed = 'FAILED',
	InProgress = 'IN_PROGRESS',
	Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
	description?: InputMaybe<Scalars['String']>;
	errorMessage?: InputMaybe<Scalars['String']>;
	isActive?: InputMaybe<Scalars['Boolean']>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
	/** Connect multiple existing ScheduledRelease documents */
	connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
	/** Create and connect multiple ScheduledRelease documents */
	create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
	/** Delete multiple ScheduledRelease documents */
	delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
	/** Disconnect multiple ScheduledRelease documents */
	disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing ScheduledRelease documents */
	set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
	/** Update multiple ScheduledRelease documents */
	update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple ScheduledRelease documents */
	upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
	description?: InputMaybe<Scalars['String']>;
	errorMessage?: InputMaybe<Scalars['String']>;
	isActive?: InputMaybe<Scalars['Boolean']>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: ScheduledReleaseUpdateManyInput;
	/** Document search */
	where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
	/** Connect existing ScheduledRelease document */
	connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
	/** Create and connect one ScheduledRelease document */
	create?: InputMaybe<ScheduledReleaseCreateInput>;
	/** Delete currently connected ScheduledRelease document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected ScheduledRelease document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single ScheduledRelease document */
	update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
	/** Upsert single ScheduledRelease document */
	upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: ScheduledReleaseUpdateInput;
	/** Unique document search */
	where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
	/** Create document if it didn't exist */
	create: ScheduledReleaseCreateInput;
	/** Update document if it exists */
	update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: ScheduledReleaseUpsertInput;
	/** Unique document search */
	where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	description?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	description_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	description_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	description_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	description_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	description_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	description_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	description_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	description_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	description_starts_with?: InputMaybe<Scalars['String']>;
	errorMessage?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	errorMessage_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	errorMessage_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	errorMessage_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	errorMessage_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	errorMessage_starts_with?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	isActive?: InputMaybe<Scalars['Boolean']>;
	/** All values that are not equal to given value. */
	isActive_not?: InputMaybe<Scalars['Boolean']>;
	isImplicit?: InputMaybe<Scalars['Boolean']>;
	/** All values that are not equal to given value. */
	isImplicit_not?: InputMaybe<Scalars['Boolean']>;
	operations_every?: InputMaybe<ScheduledOperationWhereInput>;
	operations_none?: InputMaybe<ScheduledOperationWhereInput>;
	operations_some?: InputMaybe<ScheduledOperationWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	releaseAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	status?: InputMaybe<ScheduledReleaseStatus>;
	/** All values that are contained in given list. */
	status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
	/** All values that are not equal to given value. */
	status_not?: InputMaybe<ScheduledReleaseStatus>;
	/** All values that are not contained in given list. */
	status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
	title?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	title_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	title_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	title_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	title_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	title_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	title_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	title_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	title_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	title_starts_with?: InputMaybe<Scalars['String']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
	/** The Draft is the default stage for all your content. */
	Draft = 'DRAFT',
	/** The Published stage is where you can publish your content to. */
	Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
	Base = 'BASE',
	Combined = 'COMBINED',
	Localization = 'LOCALIZATION'
}

export type Text = Node & {
	__typename?: 'Text';
	blogPost?: Maybe<BlogPost>;
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Get the document in other stages */
	documentInStages: Array<Text>;
	heading1?: Maybe<Scalars['String']>;
	heading2?: Maybe<Scalars['String']>;
	heading3?: Maybe<Scalars['String']>;
	/** List of Text versions */
	history: Array<Version>;
	/** The unique identifier */
	id: Scalars['ID'];
	link?: Maybe<Link>;
	paddingBottom?: Maybe<Padding>;
	paddingTop?: Maybe<Padding>;
	page?: Maybe<Page>;
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	scheduledIn: Array<ScheduledOperation>;
	/** System stage field */
	stage: Stage;
	text?: Maybe<RichText>;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

export type TextBlogPostArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type TextCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type TextDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

export type TextHistoryArgs = {
	limit?: Scalars['Int'];
	skip?: Scalars['Int'];
	stageOverride?: InputMaybe<Stage>;
};

export type TextLinkArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type TextPageArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type TextPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type TextScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type TextUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type TextConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: TextWhereUniqueInput;
};

/** A connection to a list of items. */
export type TextConnection = {
	__typename?: 'TextConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<TextEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type TextCreateInput = {
	blogPost?: InputMaybe<BlogPostCreateOneInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	heading1?: InputMaybe<Scalars['String']>;
	heading2?: InputMaybe<Scalars['String']>;
	heading3?: InputMaybe<Scalars['String']>;
	link?: InputMaybe<LinkCreateOneInlineInput>;
	paddingBottom?: InputMaybe<Padding>;
	paddingTop?: InputMaybe<Padding>;
	page?: InputMaybe<PageCreateOneInlineInput>;
	text?: InputMaybe<Scalars['RichTextAST']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TextCreateManyInlineInput = {
	/** Connect multiple existing Text documents */
	connect?: InputMaybe<Array<TextWhereUniqueInput>>;
	/** Create and connect multiple existing Text documents */
	create?: InputMaybe<Array<TextCreateInput>>;
};

export type TextCreateOneInlineInput = {
	/** Connect one existing Text document */
	connect?: InputMaybe<TextWhereUniqueInput>;
	/** Create and connect one Text document */
	create?: InputMaybe<TextCreateInput>;
};

/** An edge in a connection. */
export type TextEdge = {
	__typename?: 'TextEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: Text;
};

/** Identifies documents */
export type TextManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<TextWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<TextWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<TextWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	blogPost?: InputMaybe<BlogPostWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	heading1?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	heading1_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	heading1_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	heading1_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	heading1_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	heading1_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	heading1_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	heading1_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	heading1_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	heading1_starts_with?: InputMaybe<Scalars['String']>;
	heading2?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	heading2_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	heading2_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	heading2_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	heading2_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	heading2_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	heading2_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	heading2_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	heading2_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	heading2_starts_with?: InputMaybe<Scalars['String']>;
	heading3?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	heading3_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	heading3_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	heading3_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	heading3_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	heading3_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	heading3_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	heading3_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	heading3_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	heading3_starts_with?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	link?: InputMaybe<LinkWhereInput>;
	paddingBottom?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	paddingBottom_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	paddingBottom_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	paddingBottom_not_in?: InputMaybe<Array<Padding>>;
	paddingTop?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	paddingTop_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	paddingTop_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	paddingTop_not_in?: InputMaybe<Array<Padding>>;
	page?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TextOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	Heading1Asc = 'heading1_ASC',
	Heading1Desc = 'heading1_DESC',
	Heading2Asc = 'heading2_ASC',
	Heading2Desc = 'heading2_DESC',
	Heading3Asc = 'heading3_ASC',
	Heading3Desc = 'heading3_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PaddingBottomAsc = 'paddingBottom_ASC',
	PaddingBottomDesc = 'paddingBottom_DESC',
	PaddingTopAsc = 'paddingTop_ASC',
	PaddingTopDesc = 'paddingTop_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type TextUpdateInput = {
	blogPost?: InputMaybe<BlogPostUpdateOneInlineInput>;
	heading1?: InputMaybe<Scalars['String']>;
	heading2?: InputMaybe<Scalars['String']>;
	heading3?: InputMaybe<Scalars['String']>;
	link?: InputMaybe<LinkUpdateOneInlineInput>;
	paddingBottom?: InputMaybe<Padding>;
	paddingTop?: InputMaybe<Padding>;
	page?: InputMaybe<PageUpdateOneInlineInput>;
	text?: InputMaybe<Scalars['RichTextAST']>;
};

export type TextUpdateManyInlineInput = {
	/** Connect multiple existing Text documents */
	connect?: InputMaybe<Array<TextConnectInput>>;
	/** Create and connect multiple Text documents */
	create?: InputMaybe<Array<TextCreateInput>>;
	/** Delete multiple Text documents */
	delete?: InputMaybe<Array<TextWhereUniqueInput>>;
	/** Disconnect multiple Text documents */
	disconnect?: InputMaybe<Array<TextWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Text documents */
	set?: InputMaybe<Array<TextWhereUniqueInput>>;
	/** Update multiple Text documents */
	update?: InputMaybe<Array<TextUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Text documents */
	upsert?: InputMaybe<Array<TextUpsertWithNestedWhereUniqueInput>>;
};

export type TextUpdateManyInput = {
	heading1?: InputMaybe<Scalars['String']>;
	heading2?: InputMaybe<Scalars['String']>;
	heading3?: InputMaybe<Scalars['String']>;
	paddingBottom?: InputMaybe<Padding>;
	paddingTop?: InputMaybe<Padding>;
	text?: InputMaybe<Scalars['RichTextAST']>;
};

export type TextUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: TextUpdateManyInput;
	/** Document search */
	where: TextWhereInput;
};

export type TextUpdateOneInlineInput = {
	/** Connect existing Text document */
	connect?: InputMaybe<TextWhereUniqueInput>;
	/** Create and connect one Text document */
	create?: InputMaybe<TextCreateInput>;
	/** Delete currently connected Text document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected Text document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single Text document */
	update?: InputMaybe<TextUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Text document */
	upsert?: InputMaybe<TextUpsertWithNestedWhereUniqueInput>;
};

export type TextUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: TextUpdateInput;
	/** Unique document search */
	where: TextWhereUniqueInput;
};

export type TextUpsertInput = {
	/** Create document if it didn't exist */
	create: TextCreateInput;
	/** Update document if it exists */
	update: TextUpdateInput;
};

export type TextUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: TextUpsertInput;
	/** Unique document search */
	where: TextWhereUniqueInput;
};

/** Identifies documents */
export type TextWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<TextWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<TextWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<TextWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	blogPost?: InputMaybe<BlogPostWhereInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	createdBy?: InputMaybe<UserWhereInput>;
	heading1?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	heading1_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	heading1_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	heading1_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	heading1_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	heading1_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	heading1_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	heading1_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	heading1_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	heading1_starts_with?: InputMaybe<Scalars['String']>;
	heading2?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	heading2_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	heading2_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	heading2_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	heading2_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	heading2_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	heading2_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	heading2_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	heading2_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	heading2_starts_with?: InputMaybe<Scalars['String']>;
	heading3?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	heading3_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	heading3_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	heading3_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	heading3_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	heading3_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	heading3_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	heading3_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	heading3_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	heading3_starts_with?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	link?: InputMaybe<LinkWhereInput>;
	paddingBottom?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	paddingBottom_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	paddingBottom_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	paddingBottom_not_in?: InputMaybe<Array<Padding>>;
	paddingTop?: InputMaybe<Padding>;
	/** All values that are contained in given list. */
	paddingTop_in?: InputMaybe<Array<Padding>>;
	/** All values that are not equal to given value. */
	paddingTop_not?: InputMaybe<Padding>;
	/** All values that are not contained in given list. */
	paddingTop_not_in?: InputMaybe<Array<Padding>>;
	page?: InputMaybe<PageWhereInput>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	publishedBy?: InputMaybe<UserWhereInput>;
	scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
	scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Text record uniquely */
export type TextWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
};

export type UnpublishLocaleInput = {
	/** Locales to unpublish */
	locale: Locale;
	/** Stages to unpublish selected locales from */
	stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
	__typename?: 'User';
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** Get the document in other stages */
	documentInStages: Array<User>;
	/** The unique identifier */
	id: Scalars['ID'];
	/** Flag to determine if user is active or not */
	isActive: Scalars['Boolean'];
	/** User Kind. Can be either MEMBER, PAT or PUBLIC */
	kind: UserKind;
	/** The username */
	name: Scalars['String'];
	/** Profile Picture url */
	picture?: Maybe<Scalars['String']>;
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** System stage field */
	stage: Stage;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
};

/** User system model */
export type UserDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

export type UserConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
	__typename?: 'UserConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<UserEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
	/** Connect multiple existing User documents */
	connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
	/** Connect one existing User document */
	connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
	__typename?: 'UserEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: User;
};

/** System User Kind */
export enum UserKind {
	Member = 'MEMBER',
	Pat = 'PAT',
	Public = 'PUBLIC',
	Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<UserWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<UserWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<UserWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	isActive?: InputMaybe<Scalars['Boolean']>;
	/** All values that are not equal to given value. */
	isActive_not?: InputMaybe<Scalars['Boolean']>;
	kind?: InputMaybe<UserKind>;
	/** All values that are contained in given list. */
	kind_in?: InputMaybe<Array<UserKind>>;
	/** All values that are not equal to given value. */
	kind_not?: InputMaybe<UserKind>;
	/** All values that are not contained in given list. */
	kind_not_in?: InputMaybe<Array<UserKind>>;
	name?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	name_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars['String']>;
	picture?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	picture_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	picture_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	picture_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	picture_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	picture_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	picture_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	picture_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	picture_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	picture_starts_with?: InputMaybe<Scalars['String']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export enum UserOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	IsActiveAsc = 'isActive_ASC',
	IsActiveDesc = 'isActive_DESC',
	KindAsc = 'kind_ASC',
	KindDesc = 'kind_DESC',
	NameAsc = 'name_ASC',
	NameDesc = 'name_DESC',
	PictureAsc = 'picture_ASC',
	PictureDesc = 'picture_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
	/** Connect multiple existing User documents */
	connect?: InputMaybe<Array<UserConnectInput>>;
	/** Disconnect multiple User documents */
	disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing User documents */
	set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
	/** Connect existing User document */
	connect?: InputMaybe<UserWhereUniqueInput>;
	/** Disconnect currently connected User document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<UserWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<UserWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<UserWhereInput>>;
	/** Contains search across all appropriate fields. */
	_search?: InputMaybe<Scalars['String']>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	createdAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	createdAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	createdAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	createdAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	createdAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	id?: InputMaybe<Scalars['ID']>;
	/** All values containing the given string. */
	id_contains?: InputMaybe<Scalars['ID']>;
	/** All values ending with the given string. */
	id_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are contained in given list. */
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values that are not equal to given value. */
	id_not?: InputMaybe<Scalars['ID']>;
	/** All values not containing the given string. */
	id_not_contains?: InputMaybe<Scalars['ID']>;
	/** All values not ending with the given string */
	id_not_ends_with?: InputMaybe<Scalars['ID']>;
	/** All values that are not contained in given list. */
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	/** All values not starting with the given string. */
	id_not_starts_with?: InputMaybe<Scalars['ID']>;
	/** All values starting with the given string. */
	id_starts_with?: InputMaybe<Scalars['ID']>;
	isActive?: InputMaybe<Scalars['Boolean']>;
	/** All values that are not equal to given value. */
	isActive_not?: InputMaybe<Scalars['Boolean']>;
	kind?: InputMaybe<UserKind>;
	/** All values that are contained in given list. */
	kind_in?: InputMaybe<Array<UserKind>>;
	/** All values that are not equal to given value. */
	kind_not?: InputMaybe<UserKind>;
	/** All values that are not contained in given list. */
	kind_not_in?: InputMaybe<Array<UserKind>>;
	name?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	name_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	name_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	name_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	name_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	name_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	name_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	name_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	name_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	name_starts_with?: InputMaybe<Scalars['String']>;
	picture?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	picture_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	picture_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	picture_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	picture_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	picture_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	picture_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	picture_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	picture_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	picture_starts_with?: InputMaybe<Scalars['String']>;
	publishedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	publishedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than the given value. */
	updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
	/** All values greater than or equal the given value. */
	updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are contained in given list. */
	updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
	/** All values less than the given value. */
	updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
	/** All values less than or equal the given value. */
	updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not equal to given value. */
	updatedAt_not?: InputMaybe<Scalars['DateTime']>;
	/** All values that are not contained in given list. */
	updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
	__typename?: 'Version';
	createdAt: Scalars['DateTime'];
	id: Scalars['ID'];
	revision: Scalars['Int'];
	stage: Stage;
};

export type VersionWhereInput = {
	id: Scalars['ID'];
	revision: Scalars['Int'];
	stage: Stage;
};

export enum _FilterKind {
	And = 'AND',
	Not = 'NOT',
	Or = 'OR',
	Contains = 'contains',
	ContainsAll = 'contains_all',
	ContainsNone = 'contains_none',
	ContainsSome = 'contains_some',
	EndsWith = 'ends_with',
	Eq = 'eq',
	EqNot = 'eq_not',
	Gt = 'gt',
	Gte = 'gte',
	In = 'in',
	Lt = 'lt',
	Lte = 'lte',
	NotContains = 'not_contains',
	NotEndsWith = 'not_ends_with',
	NotIn = 'not_in',
	NotStartsWith = 'not_starts_with',
	RelationalEvery = 'relational_every',
	RelationalNone = 'relational_none',
	RelationalSingle = 'relational_single',
	RelationalSome = 'relational_some',
	Search = 'search',
	StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
	Enum = 'enum',
	Relation = 'relation',
	RichText = 'richText',
	RichTextWithEmbeds = 'richTextWithEmbeds',
	Scalar = 'scalar',
	Union = 'union',
	Virtual = 'virtual'
}

export enum _MutationKind {
	Create = 'create',
	Delete = 'delete',
	DeleteMany = 'deleteMany',
	Publish = 'publish',
	PublishMany = 'publishMany',
	Unpublish = 'unpublish',
	UnpublishMany = 'unpublishMany',
	Update = 'update',
	UpdateMany = 'updateMany',
	Upsert = 'upsert'
}

export enum _OrderDirection {
	Asc = 'asc',
	Desc = 'desc'
}

export enum _RelationInputCardinality {
	Many = 'many',
	One = 'one'
}

export enum _RelationInputKind {
	Create = 'create',
	Update = 'update'
}

export enum _RelationKind {
	Regular = 'regular',
	Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
	Base = 'base',
	Combined = 'combined',
	Localization = 'localization'
}

export type LinkFragmentFragment = {
	__typename?: 'Link';
	id: string;
	label?: string | null | undefined;
	target?:
		| { __typename: 'BlogPost'; id: string; slug: string }
		| { __typename: 'Page'; id: string; slug: string }
		| null
		| undefined;
};

export type Unnamed_1_QueryVariables = Exact<{
	slug: Scalars['String'];
}>;

export type Unnamed_1_Query = {
	__typename?: 'Query';
	blogPost?:
		| {
				__typename?: 'BlogPost';
				id: string;
				slug: string;
				teaserHeadline?: string | null | undefined;
				teaserSubheadline?: string | null | undefined;
				teaserText?: string | null | undefined;
				heroBackgroundImage?: { __typename?: 'Asset'; url: string } | null | undefined;
				modules: Array<
					| {
							__typename: 'AccordionContainer';
							id: string;
							headline?: string | null | undefined;
							paddingTop?: Padding | null | undefined;
							paddingBottom?: Padding | null | undefined;
							accordionItems: Array<{
								__typename?: 'AccordionItem';
								id: string;
								headline: string;
								content: { __typename?: 'RichText'; html: string };
							}>;
					  }
					| { __typename: 'AssetLink' }
					| {
							__typename: 'CardsContainer';
							id: string;
							headline?: string | null | undefined;
							paddingTop?: Padding | null | undefined;
							paddingBottom?: Padding | null | undefined;
							cards: Array<
								| {
										__typename: 'CardIcon';
										id: string;
										headline?: string | null | undefined;
										subheadline?: string | null | undefined;
										backgroundColor?:
											| {
													__typename?: 'Color';
													hex: any;
													rgba: { __typename?: 'RGBA'; r: any; g: any; b: any; a: any };
											  }
											| null
											| undefined;
										icon?: { __typename?: 'Asset'; id: string; url: string } | null | undefined;
										link?:
											| {
													__typename?: 'Link';
													id: string;
													label?: string | null | undefined;
													target?:
														| { __typename: 'BlogPost'; id: string; slug: string }
														| { __typename: 'Page'; id: string; slug: string }
														| null
														| undefined;
											  }
											| null
											| undefined;
								  }
								| {
										__typename: 'CardImage';
										id: string;
										headline?: string | null | undefined;
										linkToId?: string | null | undefined;
										image?: { __typename?: 'Asset'; id: string; url: string } | null | undefined;
										link?:
											| {
													__typename?: 'Link';
													id: string;
													label?: string | null | undefined;
													target?:
														| { __typename: 'BlogPost'; id: string; slug: string }
														| { __typename: 'Page'; id: string; slug: string }
														| null
														| undefined;
											  }
											| null
											| undefined;
								  }
							>;
					  }
					| { __typename: 'CtaLink'; id: string; padding: Padding }
					| { __typename: 'Divider'; id: string; padding: Padding }
					| {
							__typename: 'Image';
							id: string;
							imageWidth?: ImageWidth | null | undefined;
							paddingTop?: Padding | null | undefined;
							paddingBottom?: Padding | null | undefined;
							image?: { __typename?: 'Asset'; id: string; url: string } | null | undefined;
					  }
					| {
							__typename: 'Text';
							id: string;
							heading1?: string | null | undefined;
							heading2?: string | null | undefined;
							heading3?: string | null | undefined;
							paddingTop?: Padding | null | undefined;
							paddingBottom?: Padding | null | undefined;
							link?:
								| {
										__typename?: 'Link';
										id: string;
										label?: string | null | undefined;
										target?:
											| { __typename: 'BlogPost'; id: string; slug: string }
											| { __typename: 'Page'; id: string; slug: string }
											| null
											| undefined;
								  }
								| null
								| undefined;
							text?: { __typename?: 'RichText'; html: string } | null | undefined;
					  }
				>;
		  }
		| null
		| undefined;
};

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_2_Query = {
	__typename?: 'Query';
	blogPosts: Array<{
		__typename?: 'BlogPost';
		id: string;
		slug: string;
		teaserHeadline?: string | null | undefined;
		teaserSubheadline?: string | null | undefined;
		teaserText?: string | null | undefined;
		heroBackgroundImage?: { __typename?: 'Asset'; url: string } | null | undefined;
	}>;
};

export type Unnamed_3_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_3_Query = {
	__typename?: 'Query';
	referencesContainers: Array<{
		__typename?: 'ReferencesContainer';
		id: string;
		referenceItems: Array<{
			__typename?: 'ReferencesItem';
			id: string;
			referenceLogo?: { __typename?: 'Asset'; id: string; url: string } | null | undefined;
		}>;
	}>;
};

export type Unnamed_4_QueryVariables = Exact<{
	slug: Scalars['String'];
}>;

export type Unnamed_4_Query = {
	__typename?: 'Query';
	page?:
		| {
				__typename?: 'Page';
				id: string;
				slug: string;
				modules: Array<
					| {
							__typename: 'AccordionContainer';
							id: string;
							headline?: string | null | undefined;
							paddingTop?: Padding | null | undefined;
							paddingBottom?: Padding | null | undefined;
							accordionItems: Array<{
								__typename?: 'AccordionItem';
								id: string;
								headline: string;
								content: { __typename?: 'RichText'; html: string };
							}>;
					  }
					| {
							__typename: 'AssetLink';
							id: string;
							headline?: string | null | undefined;
							downloadlinkLabel?: string | null | undefined;
							assetPicker?: { __typename?: 'Asset'; url: string } | null | undefined;
					  }
					| {
							__typename: 'BlogPost';
							id: string;
							slug: string;
							teaserHeadline?: string | null | undefined;
							teaserSubheadline?: string | null | undefined;
							teaserText?: string | null | undefined;
							heroBackgroundImage?: { __typename?: 'Asset'; url: string } | null | undefined;
					  }
					| {
							__typename: 'CardsContainer';
							id: string;
							headline?: string | null | undefined;
							paddingTop?: Padding | null | undefined;
							paddingBottom?: Padding | null | undefined;
							cards: Array<
								| {
										__typename: 'CardIcon';
										id: string;
										headline?: string | null | undefined;
										subheadline?: string | null | undefined;
										backgroundColor?:
											| {
													__typename?: 'Color';
													hex: any;
													rgba: { __typename?: 'RGBA'; r: any; g: any; b: any; a: any };
											  }
											| null
											| undefined;
										icon?: { __typename?: 'Asset'; id: string; url: string } | null | undefined;
										link?:
											| {
													__typename?: 'Link';
													id: string;
													label?: string | null | undefined;
													target?:
														| { __typename: 'BlogPost'; id: string; slug: string }
														| { __typename: 'Page'; id: string; slug: string }
														| null
														| undefined;
											  }
											| null
											| undefined;
								  }
								| {
										__typename: 'CardImage';
										id: string;
										headline?: string | null | undefined;
										linkToId?: string | null | undefined;
										image?: { __typename?: 'Asset'; id: string; url: string } | null | undefined;
										link?:
											| {
													__typename?: 'Link';
													id: string;
													label?: string | null | undefined;
													target?:
														| { __typename: 'BlogPost'; id: string; slug: string }
														| { __typename: 'Page'; id: string; slug: string }
														| null
														| undefined;
											  }
											| null
											| undefined;
								  }
							>;
					  }
					| { __typename: 'CtaLink'; id: string; padding: Padding }
					| { __typename: 'Divider'; id: string; padding: Padding }
					| {
							__typename: 'Eyecatcher';
							id: string;
							headline?: string | null | undefined;
							subheadline?: string | null | undefined;
							paddingTop?: Padding | null | undefined;
							paddingBottom?: Padding | null | undefined;
							image?: { __typename?: 'Asset'; id: string; url: string } | null | undefined;
					  }
					| {
							__typename: 'HeroImage';
							id: string;
							image?: { __typename?: 'Asset'; id: string; url: string } | null | undefined;
							strokeColor?:
								| {
										__typename?: 'Color';
										hex: any;
										rgba: { __typename?: 'RGBA'; r: any; g: any; b: any; a: any };
								  }
								| null
								| undefined;
							icon?: { __typename?: 'Asset'; id: string; url: string } | null | undefined;
					  }
					| {
							__typename: 'Image';
							id: string;
							imageWidth?: ImageWidth | null | undefined;
							paddingTop?: Padding | null | undefined;
							paddingBottom?: Padding | null | undefined;
							image?: { __typename?: 'Asset'; id: string; url: string } | null | undefined;
					  }
					| {
							__typename: 'ReferencesContainer';
							id: string;
							referenceItems: Array<{
								__typename?: 'ReferencesItem';
								id: string;
								referenceLogo?:
									| { __typename?: 'Asset'; id: string; url: string }
									| null
									| undefined;
							}>;
					  }
					| {
							__typename: 'Text';
							id: string;
							heading1?: string | null | undefined;
							heading2?: string | null | undefined;
							heading3?: string | null | undefined;
							paddingTop?: Padding | null | undefined;
							paddingBottom?: Padding | null | undefined;
							link?:
								| {
										__typename?: 'Link';
										id: string;
										label?: string | null | undefined;
										target?:
											| { __typename: 'BlogPost'; id: string; slug: string }
											| { __typename: 'Page'; id: string; slug: string }
											| null
											| undefined;
								  }
								| null
								| undefined;
							text?: { __typename?: 'RichText'; html: string } | null | undefined;
					  }
				>;
		  }
		| null
		| undefined;
};
