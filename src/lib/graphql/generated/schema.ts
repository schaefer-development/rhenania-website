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

export type Aggregate = {
	__typename?: 'Aggregate';
	count: Scalars['Int'];
};

export type ArticleHeroTeaser = Node & {
	__typename?: 'ArticleHeroTeaser';
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Get the document in other stages */
	documentInStages: Array<ArticleHeroTeaser>;
	headline?: Maybe<Scalars['String']>;
	heroBackgroundImage?: Maybe<Asset>;
	/** List of ArticleHeroTeaser versions */
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
	subheadline?: Maybe<Scalars['String']>;
	teaserText?: Maybe<Scalars['String']>;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

export type ArticleHeroTeaserCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ArticleHeroTeaserDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

export type ArticleHeroTeaserHeroBackgroundImageArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ArticleHeroTeaserHistoryArgs = {
	limit?: Scalars['Int'];
	skip?: Scalars['Int'];
	stageOverride?: InputMaybe<Stage>;
};

export type ArticleHeroTeaserPageArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ArticleHeroTeaserPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ArticleHeroTeaserScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ArticleHeroTeaserUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type ArticleHeroTeaserConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: ArticleHeroTeaserWhereUniqueInput;
};

/** A connection to a list of items. */
export type ArticleHeroTeaserConnection = {
	__typename?: 'ArticleHeroTeaserConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<ArticleHeroTeaserEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type ArticleHeroTeaserCreateInput = {
	createdAt?: InputMaybe<Scalars['DateTime']>;
	headline?: InputMaybe<Scalars['String']>;
	heroBackgroundImage?: InputMaybe<AssetCreateOneInlineInput>;
	page?: InputMaybe<PageCreateOneInlineInput>;
	subheadline?: InputMaybe<Scalars['String']>;
	teaserText?: InputMaybe<Scalars['String']>;
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ArticleHeroTeaserCreateManyInlineInput = {
	/** Connect multiple existing ArticleHeroTeaser documents */
	connect?: InputMaybe<Array<ArticleHeroTeaserWhereUniqueInput>>;
	/** Create and connect multiple existing ArticleHeroTeaser documents */
	create?: InputMaybe<Array<ArticleHeroTeaserCreateInput>>;
};

export type ArticleHeroTeaserCreateOneInlineInput = {
	/** Connect one existing ArticleHeroTeaser document */
	connect?: InputMaybe<ArticleHeroTeaserWhereUniqueInput>;
	/** Create and connect one ArticleHeroTeaser document */
	create?: InputMaybe<ArticleHeroTeaserCreateInput>;
};

/** An edge in a connection. */
export type ArticleHeroTeaserEdge = {
	__typename?: 'ArticleHeroTeaserEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: ArticleHeroTeaser;
};

/** Identifies documents */
export type ArticleHeroTeaserManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ArticleHeroTeaserWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ArticleHeroTeaserWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ArticleHeroTeaserWhereInput>>;
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

export enum ArticleHeroTeaserOrderByInput {
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
	TeaserTextAsc = 'teaserText_ASC',
	TeaserTextDesc = 'teaserText_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type ArticleHeroTeaserUpdateInput = {
	headline?: InputMaybe<Scalars['String']>;
	heroBackgroundImage?: InputMaybe<AssetUpdateOneInlineInput>;
	page?: InputMaybe<PageUpdateOneInlineInput>;
	subheadline?: InputMaybe<Scalars['String']>;
	teaserText?: InputMaybe<Scalars['String']>;
};

export type ArticleHeroTeaserUpdateManyInlineInput = {
	/** Connect multiple existing ArticleHeroTeaser documents */
	connect?: InputMaybe<Array<ArticleHeroTeaserConnectInput>>;
	/** Create and connect multiple ArticleHeroTeaser documents */
	create?: InputMaybe<Array<ArticleHeroTeaserCreateInput>>;
	/** Delete multiple ArticleHeroTeaser documents */
	delete?: InputMaybe<Array<ArticleHeroTeaserWhereUniqueInput>>;
	/** Disconnect multiple ArticleHeroTeaser documents */
	disconnect?: InputMaybe<Array<ArticleHeroTeaserWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing ArticleHeroTeaser documents */
	set?: InputMaybe<Array<ArticleHeroTeaserWhereUniqueInput>>;
	/** Update multiple ArticleHeroTeaser documents */
	update?: InputMaybe<Array<ArticleHeroTeaserUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple ArticleHeroTeaser documents */
	upsert?: InputMaybe<Array<ArticleHeroTeaserUpsertWithNestedWhereUniqueInput>>;
};

export type ArticleHeroTeaserUpdateManyInput = {
	headline?: InputMaybe<Scalars['String']>;
	subheadline?: InputMaybe<Scalars['String']>;
	teaserText?: InputMaybe<Scalars['String']>;
};

export type ArticleHeroTeaserUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: ArticleHeroTeaserUpdateManyInput;
	/** Document search */
	where: ArticleHeroTeaserWhereInput;
};

export type ArticleHeroTeaserUpdateOneInlineInput = {
	/** Connect existing ArticleHeroTeaser document */
	connect?: InputMaybe<ArticleHeroTeaserWhereUniqueInput>;
	/** Create and connect one ArticleHeroTeaser document */
	create?: InputMaybe<ArticleHeroTeaserCreateInput>;
	/** Delete currently connected ArticleHeroTeaser document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected ArticleHeroTeaser document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single ArticleHeroTeaser document */
	update?: InputMaybe<ArticleHeroTeaserUpdateWithNestedWhereUniqueInput>;
	/** Upsert single ArticleHeroTeaser document */
	upsert?: InputMaybe<ArticleHeroTeaserUpsertWithNestedWhereUniqueInput>;
};

export type ArticleHeroTeaserUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: ArticleHeroTeaserUpdateInput;
	/** Unique document search */
	where: ArticleHeroTeaserWhereUniqueInput;
};

export type ArticleHeroTeaserUpsertInput = {
	/** Create document if it didn't exist */
	create: ArticleHeroTeaserCreateInput;
	/** Update document if it exists */
	update: ArticleHeroTeaserUpdateInput;
};

export type ArticleHeroTeaserUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: ArticleHeroTeaserUpsertInput;
	/** Unique document search */
	where: ArticleHeroTeaserWhereUniqueInput;
};

/** Identifies documents */
export type ArticleHeroTeaserWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<ArticleHeroTeaserWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<ArticleHeroTeaserWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<ArticleHeroTeaserWhereInput>>;
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

/** References ArticleHeroTeaser record uniquely */
export type ArticleHeroTeaserWhereUniqueInput = {
	id?: InputMaybe<Scalars['ID']>;
};

/** Asset system model */
export type Asset = Node & {
	__typename?: 'Asset';
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
	heroBackgroundImageArticleHeroTeaser: Array<ArticleHeroTeaser>;
	/** List of Asset versions */
	history: Array<Version>;
	iconCardIcon: Array<CardIcon>;
	iconHeroImage: Array<HeroImage>;
	/** The unique identifier */
	id: Scalars['ID'];
	imageCardImage: Array<CardImage>;
	imageEyecatcher: Array<Eyecatcher>;
	imageHeroImage: Array<HeroImage>;
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
export type AssetHeroBackgroundImageArticleHeroTeaserArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	orderBy?: InputMaybe<ArticleHeroTeaserOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ArticleHeroTeaserWhereInput>;
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
	createdAt?: InputMaybe<Scalars['DateTime']>;
	fileName: Scalars['String'];
	handle: Scalars['String'];
	height?: InputMaybe<Scalars['Float']>;
	heroBackgroundImageArticleHeroTeaser?: InputMaybe<ArticleHeroTeaserCreateManyInlineInput>;
	iconCardIcon?: InputMaybe<CardIconCreateManyInlineInput>;
	iconHeroImage?: InputMaybe<HeroImageCreateManyInlineInput>;
	imageCardImage?: InputMaybe<CardImageCreateManyInlineInput>;
	imageEyecatcher?: InputMaybe<EyecatcherCreateManyInlineInput>;
	imageHeroImage?: InputMaybe<HeroImageCreateManyInlineInput>;
	/** Inline mutations for managing document localizations excluding the default locale */
	localizations?: InputMaybe<AssetCreateLocalizationsInput>;
	mimeType?: InputMaybe<Scalars['String']>;
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
	heroBackgroundImageArticleHeroTeaser_every?: InputMaybe<ArticleHeroTeaserWhereInput>;
	heroBackgroundImageArticleHeroTeaser_none?: InputMaybe<ArticleHeroTeaserWhereInput>;
	heroBackgroundImageArticleHeroTeaser_some?: InputMaybe<ArticleHeroTeaserWhereInput>;
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
	fileName?: InputMaybe<Scalars['String']>;
	handle?: InputMaybe<Scalars['String']>;
	height?: InputMaybe<Scalars['Float']>;
	heroBackgroundImageArticleHeroTeaser?: InputMaybe<ArticleHeroTeaserUpdateManyInlineInput>;
	iconCardIcon?: InputMaybe<CardIconUpdateManyInlineInput>;
	iconHeroImage?: InputMaybe<HeroImageUpdateManyInlineInput>;
	imageCardImage?: InputMaybe<CardImageUpdateManyInlineInput>;
	imageEyecatcher?: InputMaybe<EyecatcherUpdateManyInlineInput>;
	imageHeroImage?: InputMaybe<HeroImageUpdateManyInlineInput>;
	/** Manage document localizations */
	localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
	mimeType?: InputMaybe<Scalars['String']>;
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
	heroBackgroundImageArticleHeroTeaser_every?: InputMaybe<ArticleHeroTeaserWhereInput>;
	heroBackgroundImageArticleHeroTeaser_none?: InputMaybe<ArticleHeroTeaserWhereInput>;
	heroBackgroundImageArticleHeroTeaser_some?: InputMaybe<ArticleHeroTeaserWhereInput>;
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
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type CardImageUpdateInput = {
	cardsContainer?: InputMaybe<CardsContainerUpdateOneInlineInput>;
	headline?: InputMaybe<Scalars['String']>;
	image?: InputMaybe<AssetUpdateOneInlineInput>;
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
	cards?: InputMaybe<CardsContainerCardCreateManyInlineInput>;
	createdAt?: InputMaybe<Scalars['DateTime']>;
	headline?: InputMaybe<Scalars['String']>;
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
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type CardsContainerUpdateInput = {
	cards?: InputMaybe<CardsContainerCardUpdateManyInlineInput>;
	headline?: InputMaybe<Scalars['String']>;
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

export type Divider = Node & {
	__typename?: 'Divider';
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
	padding: Scalars['Int'];
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
	createdAt?: InputMaybe<Scalars['DateTime']>;
	padding: Scalars['Int'];
	page?: InputMaybe<PageCreateOneInlineInput>;
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
	padding?: InputMaybe<Scalars['Int']>;
	/** All values greater than the given value. */
	padding_gt?: InputMaybe<Scalars['Int']>;
	/** All values greater than or equal the given value. */
	padding_gte?: InputMaybe<Scalars['Int']>;
	/** All values that are contained in given list. */
	padding_in?: InputMaybe<Array<Scalars['Int']>>;
	/** All values less than the given value. */
	padding_lt?: InputMaybe<Scalars['Int']>;
	/** All values less than or equal the given value. */
	padding_lte?: InputMaybe<Scalars['Int']>;
	/** All values that are not equal to given value. */
	padding_not?: InputMaybe<Scalars['Int']>;
	/** All values that are not contained in given list. */
	padding_not_in?: InputMaybe<Array<Scalars['Int']>>;
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
	padding?: InputMaybe<Scalars['Int']>;
	page?: InputMaybe<PageUpdateOneInlineInput>;
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
	padding?: InputMaybe<Scalars['Int']>;
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
	padding?: InputMaybe<Scalars['Int']>;
	/** All values greater than the given value. */
	padding_gt?: InputMaybe<Scalars['Int']>;
	/** All values greater than or equal the given value. */
	padding_gte?: InputMaybe<Scalars['Int']>;
	/** All values that are contained in given list. */
	padding_in?: InputMaybe<Array<Scalars['Int']>>;
	/** All values less than the given value. */
	padding_lt?: InputMaybe<Scalars['Int']>;
	/** All values less than or equal the given value. */
	padding_lte?: InputMaybe<Scalars['Int']>;
	/** All values that are not equal to given value. */
	padding_not?: InputMaybe<Scalars['Int']>;
	/** All values that are not contained in given list. */
	padding_not_in?: InputMaybe<Array<Scalars['Int']>>;
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

export type Faq = Node & {
	__typename?: 'Faq';
	answer: RichText;
	/** The time the document was created */
	createdAt: Scalars['DateTime'];
	/** User that created this document */
	createdBy?: Maybe<User>;
	/** Get the document in other stages */
	documentInStages: Array<Faq>;
	/** List of Faq versions */
	history: Array<Version>;
	/** The unique identifier */
	id: Scalars['ID'];
	page?: Maybe<Page>;
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	question: Scalars['String'];
	scheduledIn: Array<ScheduledOperation>;
	/** System stage field */
	stage: Stage;
	/** The time the document was updated */
	updatedAt: Scalars['DateTime'];
	/** User that last updated this document */
	updatedBy?: Maybe<User>;
};

export type FaqCreatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type FaqDocumentInStagesArgs = {
	includeCurrent?: Scalars['Boolean'];
	inheritLocale?: Scalars['Boolean'];
	stages?: Array<Stage>;
};

export type FaqHistoryArgs = {
	limit?: Scalars['Int'];
	skip?: Scalars['Int'];
	stageOverride?: InputMaybe<Stage>;
};

export type FaqPageArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type FaqPublishedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type FaqScheduledInArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: InputMaybe<Array<Locale>>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type FaqUpdatedByArgs = {
	locales?: InputMaybe<Array<Locale>>;
};

export type FaqConnectInput = {
	/** Allow to specify document position in list of connected documents, will default to appending at end of list */
	position?: InputMaybe<ConnectPositionInput>;
	/** Document to connect */
	where: FaqWhereUniqueInput;
};

/** A connection to a list of items. */
export type FaqConnection = {
	__typename?: 'FaqConnection';
	aggregate: Aggregate;
	/** A list of edges. */
	edges: Array<FaqEdge>;
	/** Information to aid in pagination. */
	pageInfo: PageInfo;
};

export type FaqCreateInput = {
	answer: Scalars['RichTextAST'];
	createdAt?: InputMaybe<Scalars['DateTime']>;
	page?: InputMaybe<PageCreateOneInlineInput>;
	question: Scalars['String'];
	updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FaqCreateManyInlineInput = {
	/** Connect multiple existing Faq documents */
	connect?: InputMaybe<Array<FaqWhereUniqueInput>>;
	/** Create and connect multiple existing Faq documents */
	create?: InputMaybe<Array<FaqCreateInput>>;
};

export type FaqCreateOneInlineInput = {
	/** Connect one existing Faq document */
	connect?: InputMaybe<FaqWhereUniqueInput>;
	/** Create and connect one Faq document */
	create?: InputMaybe<FaqCreateInput>;
};

/** An edge in a connection. */
export type FaqEdge = {
	__typename?: 'FaqEdge';
	/** A cursor for use in pagination. */
	cursor: Scalars['String'];
	/** The item at the end of the edge. */
	node: Faq;
};

/** Identifies documents */
export type FaqManyWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<FaqWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<FaqWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<FaqWhereInput>>;
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
	question?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	question_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	question_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	question_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	question_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	question_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	question_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	question_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	question_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	question_starts_with?: InputMaybe<Scalars['String']>;
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

export enum FaqOrderByInput {
	CreatedAtAsc = 'createdAt_ASC',
	CreatedAtDesc = 'createdAt_DESC',
	IdAsc = 'id_ASC',
	IdDesc = 'id_DESC',
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	QuestionAsc = 'question_ASC',
	QuestionDesc = 'question_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type FaqUpdateInput = {
	answer?: InputMaybe<Scalars['RichTextAST']>;
	page?: InputMaybe<PageUpdateOneInlineInput>;
	question?: InputMaybe<Scalars['String']>;
};

export type FaqUpdateManyInlineInput = {
	/** Connect multiple existing Faq documents */
	connect?: InputMaybe<Array<FaqConnectInput>>;
	/** Create and connect multiple Faq documents */
	create?: InputMaybe<Array<FaqCreateInput>>;
	/** Delete multiple Faq documents */
	delete?: InputMaybe<Array<FaqWhereUniqueInput>>;
	/** Disconnect multiple Faq documents */
	disconnect?: InputMaybe<Array<FaqWhereUniqueInput>>;
	/** Override currently-connected documents with multiple existing Faq documents */
	set?: InputMaybe<Array<FaqWhereUniqueInput>>;
	/** Update multiple Faq documents */
	update?: InputMaybe<Array<FaqUpdateWithNestedWhereUniqueInput>>;
	/** Upsert multiple Faq documents */
	upsert?: InputMaybe<Array<FaqUpsertWithNestedWhereUniqueInput>>;
};

export type FaqUpdateManyInput = {
	answer?: InputMaybe<Scalars['RichTextAST']>;
	question?: InputMaybe<Scalars['String']>;
};

export type FaqUpdateManyWithNestedWhereInput = {
	/** Update many input */
	data: FaqUpdateManyInput;
	/** Document search */
	where: FaqWhereInput;
};

export type FaqUpdateOneInlineInput = {
	/** Connect existing Faq document */
	connect?: InputMaybe<FaqWhereUniqueInput>;
	/** Create and connect one Faq document */
	create?: InputMaybe<FaqCreateInput>;
	/** Delete currently connected Faq document */
	delete?: InputMaybe<Scalars['Boolean']>;
	/** Disconnect currently connected Faq document */
	disconnect?: InputMaybe<Scalars['Boolean']>;
	/** Update single Faq document */
	update?: InputMaybe<FaqUpdateWithNestedWhereUniqueInput>;
	/** Upsert single Faq document */
	upsert?: InputMaybe<FaqUpsertWithNestedWhereUniqueInput>;
};

export type FaqUpdateWithNestedWhereUniqueInput = {
	/** Document to update */
	data: FaqUpdateInput;
	/** Unique document search */
	where: FaqWhereUniqueInput;
};

export type FaqUpsertInput = {
	/** Create document if it didn't exist */
	create: FaqCreateInput;
	/** Update document if it exists */
	update: FaqUpdateInput;
};

export type FaqUpsertWithNestedWhereUniqueInput = {
	/** Upsert data */
	data: FaqUpsertInput;
	/** Unique document search */
	where: FaqWhereUniqueInput;
};

/** Identifies documents */
export type FaqWhereInput = {
	/** Logical AND on all given filters. */
	AND?: InputMaybe<Array<FaqWhereInput>>;
	/** Logical NOT on all given filters combined by AND. */
	NOT?: InputMaybe<Array<FaqWhereInput>>;
	/** Logical OR on all given filters. */
	OR?: InputMaybe<Array<FaqWhereInput>>;
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
	question?: InputMaybe<Scalars['String']>;
	/** All values containing the given string. */
	question_contains?: InputMaybe<Scalars['String']>;
	/** All values ending with the given string. */
	question_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are contained in given list. */
	question_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values that are not equal to given value. */
	question_not?: InputMaybe<Scalars['String']>;
	/** All values not containing the given string. */
	question_not_contains?: InputMaybe<Scalars['String']>;
	/** All values not ending with the given string */
	question_not_ends_with?: InputMaybe<Scalars['String']>;
	/** All values that are not contained in given list. */
	question_not_in?: InputMaybe<Array<Scalars['String']>>;
	/** All values not starting with the given string. */
	question_not_starts_with?: InputMaybe<Scalars['String']>;
	/** All values starting with the given string. */
	question_starts_with?: InputMaybe<Scalars['String']>;
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

/** References Faq record uniquely */
export type FaqWhereUniqueInput = {
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
	/** No fields in updateMany data input */
	_?: InputMaybe<Scalars['String']>;
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
	/** Create one articleHeroTeaser */
	createArticleHeroTeaser?: Maybe<ArticleHeroTeaser>;
	/**
	 * Create one asset
	 * @deprecated Asset mutations will be overhauled soon
	 */
	createAsset?: Maybe<Asset>;
	/** Create one cardIcon */
	createCardIcon?: Maybe<CardIcon>;
	/** Create one cardImage */
	createCardImage?: Maybe<CardImage>;
	/** Create one cardsContainer */
	createCardsContainer?: Maybe<CardsContainer>;
	/** Create one divider */
	createDivider?: Maybe<Divider>;
	/** Create one eyecatcher */
	createEyecatcher?: Maybe<Eyecatcher>;
	/** Create one faq */
	createFaq?: Maybe<Faq>;
	/** Create one heroImage */
	createHeroImage?: Maybe<HeroImage>;
	/** Create one page */
	createPage?: Maybe<Page>;
	/** Create one scheduledRelease */
	createScheduledRelease?: Maybe<ScheduledRelease>;
	/** Create one text */
	createText?: Maybe<Text>;
	/** Delete one articleHeroTeaser from _all_ existing stages. Returns deleted document. */
	deleteArticleHeroTeaser?: Maybe<ArticleHeroTeaser>;
	/** Delete one asset from _all_ existing stages. Returns deleted document. */
	deleteAsset?: Maybe<Asset>;
	/** Delete one cardIcon from _all_ existing stages. Returns deleted document. */
	deleteCardIcon?: Maybe<CardIcon>;
	/** Delete one cardImage from _all_ existing stages. Returns deleted document. */
	deleteCardImage?: Maybe<CardImage>;
	/** Delete one cardsContainer from _all_ existing stages. Returns deleted document. */
	deleteCardsContainer?: Maybe<CardsContainer>;
	/** Delete one divider from _all_ existing stages. Returns deleted document. */
	deleteDivider?: Maybe<Divider>;
	/** Delete one eyecatcher from _all_ existing stages. Returns deleted document. */
	deleteEyecatcher?: Maybe<Eyecatcher>;
	/** Delete one faq from _all_ existing stages. Returns deleted document. */
	deleteFaq?: Maybe<Faq>;
	/** Delete one heroImage from _all_ existing stages. Returns deleted document. */
	deleteHeroImage?: Maybe<HeroImage>;
	/**
	 * Delete many ArticleHeroTeaser documents
	 * @deprecated Please use the new paginated many mutation (deleteManyArticleHeroTeasersConnection)
	 */
	deleteManyArticleHeroTeasers: BatchPayload;
	/** Delete many ArticleHeroTeaser documents, return deleted documents */
	deleteManyArticleHeroTeasersConnection: ArticleHeroTeaserConnection;
	/**
	 * Delete many Asset documents
	 * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
	 */
	deleteManyAssets: BatchPayload;
	/** Delete many Asset documents, return deleted documents */
	deleteManyAssetsConnection: AssetConnection;
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
	 * Delete many Faq documents
	 * @deprecated Please use the new paginated many mutation (deleteManyFaqsConnection)
	 */
	deleteManyFaqs: BatchPayload;
	/** Delete many Faq documents, return deleted documents */
	deleteManyFaqsConnection: FaqConnection;
	/**
	 * Delete many HeroImage documents
	 * @deprecated Please use the new paginated many mutation (deleteManyHeroImagesConnection)
	 */
	deleteManyHeroImages: BatchPayload;
	/** Delete many HeroImage documents, return deleted documents */
	deleteManyHeroImagesConnection: HeroImageConnection;
	/**
	 * Delete many Page documents
	 * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
	 */
	deleteManyPages: BatchPayload;
	/** Delete many Page documents, return deleted documents */
	deleteManyPagesConnection: PageConnection;
	/**
	 * Delete many Text documents
	 * @deprecated Please use the new paginated many mutation (deleteManyTextsConnection)
	 */
	deleteManyTexts: BatchPayload;
	/** Delete many Text documents, return deleted documents */
	deleteManyTextsConnection: TextConnection;
	/** Delete one page from _all_ existing stages. Returns deleted document. */
	deletePage?: Maybe<Page>;
	/** Delete and return scheduled operation */
	deleteScheduledOperation?: Maybe<ScheduledOperation>;
	/** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
	deleteScheduledRelease?: Maybe<ScheduledRelease>;
	/** Delete one text from _all_ existing stages. Returns deleted document. */
	deleteText?: Maybe<Text>;
	/** Publish one articleHeroTeaser */
	publishArticleHeroTeaser?: Maybe<ArticleHeroTeaser>;
	/** Publish one asset */
	publishAsset?: Maybe<Asset>;
	/** Publish one cardIcon */
	publishCardIcon?: Maybe<CardIcon>;
	/** Publish one cardImage */
	publishCardImage?: Maybe<CardImage>;
	/** Publish one cardsContainer */
	publishCardsContainer?: Maybe<CardsContainer>;
	/** Publish one divider */
	publishDivider?: Maybe<Divider>;
	/** Publish one eyecatcher */
	publishEyecatcher?: Maybe<Eyecatcher>;
	/** Publish one faq */
	publishFaq?: Maybe<Faq>;
	/** Publish one heroImage */
	publishHeroImage?: Maybe<HeroImage>;
	/**
	 * Publish many ArticleHeroTeaser documents
	 * @deprecated Please use the new paginated many mutation (publishManyArticleHeroTeasersConnection)
	 */
	publishManyArticleHeroTeasers: BatchPayload;
	/** Publish many ArticleHeroTeaser documents */
	publishManyArticleHeroTeasersConnection: ArticleHeroTeaserConnection;
	/**
	 * Publish many Asset documents
	 * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
	 */
	publishManyAssets: BatchPayload;
	/** Publish many Asset documents */
	publishManyAssetsConnection: AssetConnection;
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
	 * Publish many Faq documents
	 * @deprecated Please use the new paginated many mutation (publishManyFaqsConnection)
	 */
	publishManyFaqs: BatchPayload;
	/** Publish many Faq documents */
	publishManyFaqsConnection: FaqConnection;
	/**
	 * Publish many HeroImage documents
	 * @deprecated Please use the new paginated many mutation (publishManyHeroImagesConnection)
	 */
	publishManyHeroImages: BatchPayload;
	/** Publish many HeroImage documents */
	publishManyHeroImagesConnection: HeroImageConnection;
	/**
	 * Publish many Page documents
	 * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
	 */
	publishManyPages: BatchPayload;
	/** Publish many Page documents */
	publishManyPagesConnection: PageConnection;
	/**
	 * Publish many Text documents
	 * @deprecated Please use the new paginated many mutation (publishManyTextsConnection)
	 */
	publishManyTexts: BatchPayload;
	/** Publish many Text documents */
	publishManyTextsConnection: TextConnection;
	/** Publish one page */
	publishPage?: Maybe<Page>;
	/** Publish one text */
	publishText?: Maybe<Text>;
	/** Schedule to publish one articleHeroTeaser */
	schedulePublishArticleHeroTeaser?: Maybe<ArticleHeroTeaser>;
	/** Schedule to publish one asset */
	schedulePublishAsset?: Maybe<Asset>;
	/** Schedule to publish one cardIcon */
	schedulePublishCardIcon?: Maybe<CardIcon>;
	/** Schedule to publish one cardImage */
	schedulePublishCardImage?: Maybe<CardImage>;
	/** Schedule to publish one cardsContainer */
	schedulePublishCardsContainer?: Maybe<CardsContainer>;
	/** Schedule to publish one divider */
	schedulePublishDivider?: Maybe<Divider>;
	/** Schedule to publish one eyecatcher */
	schedulePublishEyecatcher?: Maybe<Eyecatcher>;
	/** Schedule to publish one faq */
	schedulePublishFaq?: Maybe<Faq>;
	/** Schedule to publish one heroImage */
	schedulePublishHeroImage?: Maybe<HeroImage>;
	/** Schedule to publish one page */
	schedulePublishPage?: Maybe<Page>;
	/** Schedule to publish one text */
	schedulePublishText?: Maybe<Text>;
	/** Unpublish one articleHeroTeaser from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishArticleHeroTeaser?: Maybe<ArticleHeroTeaser>;
	/** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishAsset?: Maybe<Asset>;
	/** Unpublish one cardIcon from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishCardIcon?: Maybe<CardIcon>;
	/** Unpublish one cardImage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishCardImage?: Maybe<CardImage>;
	/** Unpublish one cardsContainer from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishCardsContainer?: Maybe<CardsContainer>;
	/** Unpublish one divider from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishDivider?: Maybe<Divider>;
	/** Unpublish one eyecatcher from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishEyecatcher?: Maybe<Eyecatcher>;
	/** Unpublish one faq from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishFaq?: Maybe<Faq>;
	/** Unpublish one heroImage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishHeroImage?: Maybe<HeroImage>;
	/** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishPage?: Maybe<Page>;
	/** Unpublish one text from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	scheduleUnpublishText?: Maybe<Text>;
	/** Unpublish one articleHeroTeaser from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishArticleHeroTeaser?: Maybe<ArticleHeroTeaser>;
	/** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishAsset?: Maybe<Asset>;
	/** Unpublish one cardIcon from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishCardIcon?: Maybe<CardIcon>;
	/** Unpublish one cardImage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishCardImage?: Maybe<CardImage>;
	/** Unpublish one cardsContainer from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishCardsContainer?: Maybe<CardsContainer>;
	/** Unpublish one divider from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishDivider?: Maybe<Divider>;
	/** Unpublish one eyecatcher from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishEyecatcher?: Maybe<Eyecatcher>;
	/** Unpublish one faq from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishFaq?: Maybe<Faq>;
	/** Unpublish one heroImage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishHeroImage?: Maybe<HeroImage>;
	/**
	 * Unpublish many ArticleHeroTeaser documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyArticleHeroTeasersConnection)
	 */
	unpublishManyArticleHeroTeasers: BatchPayload;
	/** Find many ArticleHeroTeaser documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyArticleHeroTeasersConnection: ArticleHeroTeaserConnection;
	/**
	 * Unpublish many Asset documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
	 */
	unpublishManyAssets: BatchPayload;
	/** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyAssetsConnection: AssetConnection;
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
	 * Unpublish many Faq documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyFaqsConnection)
	 */
	unpublishManyFaqs: BatchPayload;
	/** Find many Faq documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyFaqsConnection: FaqConnection;
	/**
	 * Unpublish many HeroImage documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyHeroImagesConnection)
	 */
	unpublishManyHeroImages: BatchPayload;
	/** Find many HeroImage documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyHeroImagesConnection: HeroImageConnection;
	/**
	 * Unpublish many Page documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
	 */
	unpublishManyPages: BatchPayload;
	/** Find many Page documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyPagesConnection: PageConnection;
	/**
	 * Unpublish many Text documents
	 * @deprecated Please use the new paginated many mutation (unpublishManyTextsConnection)
	 */
	unpublishManyTexts: BatchPayload;
	/** Find many Text documents that match criteria in specified stage and unpublish from target stages */
	unpublishManyTextsConnection: TextConnection;
	/** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishPage?: Maybe<Page>;
	/** Unpublish one text from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
	unpublishText?: Maybe<Text>;
	/** Update one articleHeroTeaser */
	updateArticleHeroTeaser?: Maybe<ArticleHeroTeaser>;
	/** Update one asset */
	updateAsset?: Maybe<Asset>;
	/** Update one cardIcon */
	updateCardIcon?: Maybe<CardIcon>;
	/** Update one cardImage */
	updateCardImage?: Maybe<CardImage>;
	/** Update one cardsContainer */
	updateCardsContainer?: Maybe<CardsContainer>;
	/** Update one divider */
	updateDivider?: Maybe<Divider>;
	/** Update one eyecatcher */
	updateEyecatcher?: Maybe<Eyecatcher>;
	/** Update one faq */
	updateFaq?: Maybe<Faq>;
	/** Update one heroImage */
	updateHeroImage?: Maybe<HeroImage>;
	/**
	 * Update many articleHeroTeasers
	 * @deprecated Please use the new paginated many mutation (updateManyArticleHeroTeasersConnection)
	 */
	updateManyArticleHeroTeasers: BatchPayload;
	/** Update many ArticleHeroTeaser documents */
	updateManyArticleHeroTeasersConnection: ArticleHeroTeaserConnection;
	/**
	 * Update many assets
	 * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
	 */
	updateManyAssets: BatchPayload;
	/** Update many Asset documents */
	updateManyAssetsConnection: AssetConnection;
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
	 * Update many faqs
	 * @deprecated Please use the new paginated many mutation (updateManyFaqsConnection)
	 */
	updateManyFaqs: BatchPayload;
	/** Update many Faq documents */
	updateManyFaqsConnection: FaqConnection;
	/**
	 * Update many heroImages
	 * @deprecated Please use the new paginated many mutation (updateManyHeroImagesConnection)
	 */
	updateManyHeroImages: BatchPayload;
	/** Update many HeroImage documents */
	updateManyHeroImagesConnection: HeroImageConnection;
	/**
	 * Update many pages
	 * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
	 */
	updateManyPages: BatchPayload;
	/** Update many Page documents */
	updateManyPagesConnection: PageConnection;
	/**
	 * Update many texts
	 * @deprecated Please use the new paginated many mutation (updateManyTextsConnection)
	 */
	updateManyTexts: BatchPayload;
	/** Update many Text documents */
	updateManyTextsConnection: TextConnection;
	/** Update one page */
	updatePage?: Maybe<Page>;
	/** Update one scheduledRelease */
	updateScheduledRelease?: Maybe<ScheduledRelease>;
	/** Update one text */
	updateText?: Maybe<Text>;
	/** Upsert one articleHeroTeaser */
	upsertArticleHeroTeaser?: Maybe<ArticleHeroTeaser>;
	/** Upsert one asset */
	upsertAsset?: Maybe<Asset>;
	/** Upsert one cardIcon */
	upsertCardIcon?: Maybe<CardIcon>;
	/** Upsert one cardImage */
	upsertCardImage?: Maybe<CardImage>;
	/** Upsert one cardsContainer */
	upsertCardsContainer?: Maybe<CardsContainer>;
	/** Upsert one divider */
	upsertDivider?: Maybe<Divider>;
	/** Upsert one eyecatcher */
	upsertEyecatcher?: Maybe<Eyecatcher>;
	/** Upsert one faq */
	upsertFaq?: Maybe<Faq>;
	/** Upsert one heroImage */
	upsertHeroImage?: Maybe<HeroImage>;
	/** Upsert one page */
	upsertPage?: Maybe<Page>;
	/** Upsert one text */
	upsertText?: Maybe<Text>;
};

export type MutationCreateArticleHeroTeaserArgs = {
	data: ArticleHeroTeaserCreateInput;
};

export type MutationCreateAssetArgs = {
	data: AssetCreateInput;
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

export type MutationCreateDividerArgs = {
	data: DividerCreateInput;
};

export type MutationCreateEyecatcherArgs = {
	data: EyecatcherCreateInput;
};

export type MutationCreateFaqArgs = {
	data: FaqCreateInput;
};

export type MutationCreateHeroImageArgs = {
	data: HeroImageCreateInput;
};

export type MutationCreatePageArgs = {
	data: PageCreateInput;
};

export type MutationCreateScheduledReleaseArgs = {
	data: ScheduledReleaseCreateInput;
};

export type MutationCreateTextArgs = {
	data: TextCreateInput;
};

export type MutationDeleteArticleHeroTeaserArgs = {
	where: ArticleHeroTeaserWhereUniqueInput;
};

export type MutationDeleteAssetArgs = {
	where: AssetWhereUniqueInput;
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

export type MutationDeleteDividerArgs = {
	where: DividerWhereUniqueInput;
};

export type MutationDeleteEyecatcherArgs = {
	where: EyecatcherWhereUniqueInput;
};

export type MutationDeleteFaqArgs = {
	where: FaqWhereUniqueInput;
};

export type MutationDeleteHeroImageArgs = {
	where: HeroImageWhereUniqueInput;
};

export type MutationDeleteManyArticleHeroTeasersArgs = {
	where?: InputMaybe<ArticleHeroTeaserManyWhereInput>;
};

export type MutationDeleteManyArticleHeroTeasersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ArticleHeroTeaserManyWhereInput>;
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

export type MutationDeleteManyFaqsArgs = {
	where?: InputMaybe<FaqManyWhereInput>;
};

export type MutationDeleteManyFaqsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<FaqManyWhereInput>;
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

export type MutationDeleteScheduledOperationArgs = {
	where: ScheduledOperationWhereUniqueInput;
};

export type MutationDeleteScheduledReleaseArgs = {
	where: ScheduledReleaseWhereUniqueInput;
};

export type MutationDeleteTextArgs = {
	where: TextWhereUniqueInput;
};

export type MutationPublishArticleHeroTeaserArgs = {
	to?: Array<Stage>;
	where: ArticleHeroTeaserWhereUniqueInput;
};

export type MutationPublishAssetArgs = {
	locales?: InputMaybe<Array<Locale>>;
	publishBase?: InputMaybe<Scalars['Boolean']>;
	to?: Array<Stage>;
	where: AssetWhereUniqueInput;
	withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
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

export type MutationPublishFaqArgs = {
	to?: Array<Stage>;
	where: FaqWhereUniqueInput;
};

export type MutationPublishHeroImageArgs = {
	to?: Array<Stage>;
	where: HeroImageWhereUniqueInput;
};

export type MutationPublishManyArticleHeroTeasersArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<ArticleHeroTeaserManyWhereInput>;
};

export type MutationPublishManyArticleHeroTeasersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	to?: Array<Stage>;
	where?: InputMaybe<ArticleHeroTeaserManyWhereInput>;
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

export type MutationPublishManyFaqsArgs = {
	to?: Array<Stage>;
	where?: InputMaybe<FaqManyWhereInput>;
};

export type MutationPublishManyFaqsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: InputMaybe<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	to?: Array<Stage>;
	where?: InputMaybe<FaqManyWhereInput>;
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

export type MutationPublishTextArgs = {
	to?: Array<Stage>;
	where: TextWhereUniqueInput;
};

export type MutationSchedulePublishArticleHeroTeaserArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: ArticleHeroTeaserWhereUniqueInput;
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

export type MutationSchedulePublishFaqArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: FaqWhereUniqueInput;
};

export type MutationSchedulePublishHeroImageArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: HeroImageWhereUniqueInput;
};

export type MutationSchedulePublishPageArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: PageWhereUniqueInput;
};

export type MutationSchedulePublishTextArgs = {
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	to?: Array<Stage>;
	where: TextWhereUniqueInput;
};

export type MutationScheduleUnpublishArticleHeroTeaserArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: ArticleHeroTeaserWhereUniqueInput;
};

export type MutationScheduleUnpublishAssetArgs = {
	from?: Array<Stage>;
	locales?: InputMaybe<Array<Locale>>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	unpublishBase?: InputMaybe<Scalars['Boolean']>;
	where: AssetWhereUniqueInput;
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

export type MutationScheduleUnpublishFaqArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: FaqWhereUniqueInput;
};

export type MutationScheduleUnpublishHeroImageArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: HeroImageWhereUniqueInput;
};

export type MutationScheduleUnpublishPageArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: PageWhereUniqueInput;
};

export type MutationScheduleUnpublishTextArgs = {
	from?: Array<Stage>;
	releaseAt?: InputMaybe<Scalars['DateTime']>;
	releaseId?: InputMaybe<Scalars['String']>;
	where: TextWhereUniqueInput;
};

export type MutationUnpublishArticleHeroTeaserArgs = {
	from?: Array<Stage>;
	where: ArticleHeroTeaserWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
	from?: Array<Stage>;
	locales?: InputMaybe<Array<Locale>>;
	unpublishBase?: InputMaybe<Scalars['Boolean']>;
	where: AssetWhereUniqueInput;
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

export type MutationUnpublishFaqArgs = {
	from?: Array<Stage>;
	where: FaqWhereUniqueInput;
};

export type MutationUnpublishHeroImageArgs = {
	from?: Array<Stage>;
	where: HeroImageWhereUniqueInput;
};

export type MutationUnpublishManyArticleHeroTeasersArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<ArticleHeroTeaserManyWhereInput>;
};

export type MutationUnpublishManyArticleHeroTeasersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<ArticleHeroTeaserManyWhereInput>;
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

export type MutationUnpublishManyFaqsArgs = {
	from?: Array<Stage>;
	where?: InputMaybe<FaqManyWhereInput>;
};

export type MutationUnpublishManyFaqsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	first?: InputMaybe<Scalars['Int']>;
	from?: Array<Stage>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: InputMaybe<Stage>;
	where?: InputMaybe<FaqManyWhereInput>;
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

export type MutationUnpublishTextArgs = {
	from?: Array<Stage>;
	where: TextWhereUniqueInput;
};

export type MutationUpdateArticleHeroTeaserArgs = {
	data: ArticleHeroTeaserUpdateInput;
	where: ArticleHeroTeaserWhereUniqueInput;
};

export type MutationUpdateAssetArgs = {
	data: AssetUpdateInput;
	where: AssetWhereUniqueInput;
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

export type MutationUpdateDividerArgs = {
	data: DividerUpdateInput;
	where: DividerWhereUniqueInput;
};

export type MutationUpdateEyecatcherArgs = {
	data: EyecatcherUpdateInput;
	where: EyecatcherWhereUniqueInput;
};

export type MutationUpdateFaqArgs = {
	data: FaqUpdateInput;
	where: FaqWhereUniqueInput;
};

export type MutationUpdateHeroImageArgs = {
	data: HeroImageUpdateInput;
	where: HeroImageWhereUniqueInput;
};

export type MutationUpdateManyArticleHeroTeasersArgs = {
	data: ArticleHeroTeaserUpdateManyInput;
	where?: InputMaybe<ArticleHeroTeaserManyWhereInput>;
};

export type MutationUpdateManyArticleHeroTeasersConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	data: ArticleHeroTeaserUpdateManyInput;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<ArticleHeroTeaserManyWhereInput>;
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

export type MutationUpdateManyFaqsArgs = {
	data: FaqUpdateManyInput;
	where?: InputMaybe<FaqManyWhereInput>;
};

export type MutationUpdateManyFaqsConnectionArgs = {
	after?: InputMaybe<Scalars['ID']>;
	before?: InputMaybe<Scalars['ID']>;
	data: FaqUpdateManyInput;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<FaqManyWhereInput>;
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

export type MutationUpdateScheduledReleaseArgs = {
	data: ScheduledReleaseUpdateInput;
	where: ScheduledReleaseWhereUniqueInput;
};

export type MutationUpdateTextArgs = {
	data: TextUpdateInput;
	where: TextWhereUniqueInput;
};

export type MutationUpsertArticleHeroTeaserArgs = {
	upsert: ArticleHeroTeaserUpsertInput;
	where: ArticleHeroTeaserWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
	upsert: AssetUpsertInput;
	where: AssetWhereUniqueInput;
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

export type MutationUpsertDividerArgs = {
	upsert: DividerUpsertInput;
	where: DividerWhereUniqueInput;
};

export type MutationUpsertEyecatcherArgs = {
	upsert: EyecatcherUpsertInput;
	where: EyecatcherWhereUniqueInput;
};

export type MutationUpsertFaqArgs = {
	upsert: FaqUpsertInput;
	where: FaqWhereUniqueInput;
};

export type MutationUpsertHeroImageArgs = {
	upsert: HeroImageUpsertInput;
	where: HeroImageWhereUniqueInput;
};

export type MutationUpsertPageArgs = {
	upsert: PageUpsertInput;
	where: PageWhereUniqueInput;
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
	modules: Array<PageModul>;
	/** The time the document was published. Null on documents in draft stage. */
	publishedAt?: Maybe<Scalars['DateTime']>;
	/** User that last published this document */
	publishedBy?: Maybe<User>;
	scheduledIn: Array<ScheduledOperation>;
	slug: Scalars['String'];
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
	modules?: InputMaybe<PageModulCreateManyInlineInput>;
	slug: Scalars['String'];
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
	| ArticleHeroTeaser
	| CardsContainer
	| Divider
	| Eyecatcher
	| Faq
	| HeroImage
	| Text;

export type PageModulConnectInput = {
	ArticleHeroTeaser?: InputMaybe<ArticleHeroTeaserConnectInput>;
	CardsContainer?: InputMaybe<CardsContainerConnectInput>;
	Divider?: InputMaybe<DividerConnectInput>;
	Eyecatcher?: InputMaybe<EyecatcherConnectInput>;
	Faq?: InputMaybe<FaqConnectInput>;
	HeroImage?: InputMaybe<HeroImageConnectInput>;
	Text?: InputMaybe<TextConnectInput>;
};

export type PageModulCreateInput = {
	ArticleHeroTeaser?: InputMaybe<ArticleHeroTeaserCreateInput>;
	CardsContainer?: InputMaybe<CardsContainerCreateInput>;
	Divider?: InputMaybe<DividerCreateInput>;
	Eyecatcher?: InputMaybe<EyecatcherCreateInput>;
	Faq?: InputMaybe<FaqCreateInput>;
	HeroImage?: InputMaybe<HeroImageCreateInput>;
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
	ArticleHeroTeaser?: InputMaybe<ArticleHeroTeaserUpdateInput>;
	CardsContainer?: InputMaybe<CardsContainerUpdateInput>;
	Divider?: InputMaybe<DividerUpdateInput>;
	Eyecatcher?: InputMaybe<EyecatcherUpdateInput>;
	Faq?: InputMaybe<FaqUpdateInput>;
	HeroImage?: InputMaybe<HeroImageUpdateInput>;
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
	ArticleHeroTeaser?: InputMaybe<ArticleHeroTeaserUpdateManyWithNestedWhereInput>;
	CardsContainer?: InputMaybe<CardsContainerUpdateManyWithNestedWhereInput>;
	Divider?: InputMaybe<DividerUpdateManyWithNestedWhereInput>;
	Eyecatcher?: InputMaybe<EyecatcherUpdateManyWithNestedWhereInput>;
	Faq?: InputMaybe<FaqUpdateManyWithNestedWhereInput>;
	HeroImage?: InputMaybe<HeroImageUpdateManyWithNestedWhereInput>;
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
	ArticleHeroTeaser?: InputMaybe<ArticleHeroTeaserUpdateWithNestedWhereUniqueInput>;
	CardsContainer?: InputMaybe<CardsContainerUpdateWithNestedWhereUniqueInput>;
	Divider?: InputMaybe<DividerUpdateWithNestedWhereUniqueInput>;
	Eyecatcher?: InputMaybe<EyecatcherUpdateWithNestedWhereUniqueInput>;
	Faq?: InputMaybe<FaqUpdateWithNestedWhereUniqueInput>;
	HeroImage?: InputMaybe<HeroImageUpdateWithNestedWhereUniqueInput>;
	Text?: InputMaybe<TextUpdateWithNestedWhereUniqueInput>;
};

export type PageModulUpsertWithNestedWhereUniqueInput = {
	ArticleHeroTeaser?: InputMaybe<ArticleHeroTeaserUpsertWithNestedWhereUniqueInput>;
	CardsContainer?: InputMaybe<CardsContainerUpsertWithNestedWhereUniqueInput>;
	Divider?: InputMaybe<DividerUpsertWithNestedWhereUniqueInput>;
	Eyecatcher?: InputMaybe<EyecatcherUpsertWithNestedWhereUniqueInput>;
	Faq?: InputMaybe<FaqUpsertWithNestedWhereUniqueInput>;
	HeroImage?: InputMaybe<HeroImageUpsertWithNestedWhereUniqueInput>;
	Text?: InputMaybe<TextUpsertWithNestedWhereUniqueInput>;
};

export type PageModulWhereInput = {
	ArticleHeroTeaser?: InputMaybe<ArticleHeroTeaserWhereInput>;
	CardsContainer?: InputMaybe<CardsContainerWhereInput>;
	Divider?: InputMaybe<DividerWhereInput>;
	Eyecatcher?: InputMaybe<EyecatcherWhereInput>;
	Faq?: InputMaybe<FaqWhereInput>;
	HeroImage?: InputMaybe<HeroImageWhereInput>;
	Text?: InputMaybe<TextWhereInput>;
};

export type PageModulWhereUniqueInput = {
	ArticleHeroTeaser?: InputMaybe<ArticleHeroTeaserWhereUniqueInput>;
	CardsContainer?: InputMaybe<CardsContainerWhereUniqueInput>;
	Divider?: InputMaybe<DividerWhereUniqueInput>;
	Eyecatcher?: InputMaybe<EyecatcherWhereUniqueInput>;
	Faq?: InputMaybe<FaqWhereUniqueInput>;
	HeroImage?: InputMaybe<HeroImageWhereUniqueInput>;
	Text?: InputMaybe<TextWhereUniqueInput>;
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
	modules?: InputMaybe<PageModulUpdateManyInlineInput>;
	slug?: InputMaybe<Scalars['String']>;
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
	/** Retrieve a single articleHeroTeaser */
	articleHeroTeaser?: Maybe<ArticleHeroTeaser>;
	/** Retrieve document version */
	articleHeroTeaserVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple articleHeroTeasers */
	articleHeroTeasers: Array<ArticleHeroTeaser>;
	/** Retrieve multiple articleHeroTeasers using the Relay connection interface */
	articleHeroTeasersConnection: ArticleHeroTeaserConnection;
	/** Retrieve a single asset */
	asset?: Maybe<Asset>;
	/** Retrieve document version */
	assetVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple assets */
	assets: Array<Asset>;
	/** Retrieve multiple assets using the Relay connection interface */
	assetsConnection: AssetConnection;
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
	/** Retrieve a single faq */
	faq?: Maybe<Faq>;
	/** Retrieve document version */
	faqVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple faqs */
	faqs: Array<Faq>;
	/** Retrieve multiple faqs using the Relay connection interface */
	faqsConnection: FaqConnection;
	/** Retrieve a single heroImage */
	heroImage?: Maybe<HeroImage>;
	/** Retrieve document version */
	heroImageVersion?: Maybe<DocumentVersion>;
	/** Retrieve multiple heroImages */
	heroImages: Array<HeroImage>;
	/** Retrieve multiple heroImages using the Relay connection interface */
	heroImagesConnection: HeroImageConnection;
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

export type QueryArticleHeroTeaserArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: ArticleHeroTeaserWhereUniqueInput;
};

export type QueryArticleHeroTeaserVersionArgs = {
	where: VersionWhereInput;
};

export type QueryArticleHeroTeasersArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ArticleHeroTeaserOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<ArticleHeroTeaserWhereInput>;
};

export type QueryArticleHeroTeasersConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<ArticleHeroTeaserOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<ArticleHeroTeaserWhereInput>;
};

export type QueryAssetArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: AssetWhereUniqueInput;
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

export type QueryFaqArgs = {
	locales?: Array<Locale>;
	stage?: Stage;
	where: FaqWhereUniqueInput;
};

export type QueryFaqVersionArgs = {
	where: VersionWhereInput;
};

export type QueryFaqsArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<FaqOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<FaqWhereInput>;
};

export type QueryFaqsConnectionArgs = {
	after?: InputMaybe<Scalars['String']>;
	before?: InputMaybe<Scalars['String']>;
	first?: InputMaybe<Scalars['Int']>;
	last?: InputMaybe<Scalars['Int']>;
	locales?: Array<Locale>;
	orderBy?: InputMaybe<FaqOrderByInput>;
	skip?: InputMaybe<Scalars['Int']>;
	stage?: Stage;
	where?: InputMaybe<FaqWhereInput>;
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
	| ArticleHeroTeaser
	| Asset
	| CardIcon
	| CardImage
	| CardsContainer
	| Divider
	| Eyecatcher
	| Faq
	| HeroImage
	| Page
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
	createdAt?: InputMaybe<Scalars['DateTime']>;
	heading1?: InputMaybe<Scalars['String']>;
	heading2?: InputMaybe<Scalars['String']>;
	heading3?: InputMaybe<Scalars['String']>;
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
	PublishedAtAsc = 'publishedAt_ASC',
	PublishedAtDesc = 'publishedAt_DESC',
	UpdatedAtAsc = 'updatedAt_ASC',
	UpdatedAtDesc = 'updatedAt_DESC'
}

export type TextUpdateInput = {
	heading1?: InputMaybe<Scalars['String']>;
	heading2?: InputMaybe<Scalars['String']>;
	heading3?: InputMaybe<Scalars['String']>;
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

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_1_Query = {
	__typename?: 'Query';
	page?:
		| {
				__typename?: 'Page';
				id: string;
				slug: string;
				modules: Array<
					| { __typename: 'ArticleHeroTeaser' }
					| {
							__typename: 'CardsContainer';
							id: string;
							headline?: string | null | undefined;
							cards: Array<
								| {
										__typename: 'CardIcon';
										id: string;
										icon?: { __typename?: 'Asset'; url: string } | null | undefined;
								  }
								| {
										__typename: 'CardImage';
										id: string;
										image?: { __typename?: 'Asset'; url: string } | null | undefined;
								  }
							>;
					  }
					| { __typename: 'Divider'; id: string; padding: number }
					| {
							__typename: 'Eyecatcher';
							id: string;
							headline?: string | null | undefined;
							subheadline?: string | null | undefined;
							buttonLabel?: string | null | undefined;
					  }
					| { __typename: 'Faq' }
					| { __typename: 'HeroImage' }
					| { __typename: 'Text' }
				>;
		  }
		| null
		| undefined;
};
